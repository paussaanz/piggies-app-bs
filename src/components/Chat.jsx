import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getAccessToken } from '../stores/AccessTokenStore';
import { getMessageHistory, uploadImage } from '../services/MessageService';
import Button from "../components/Button";
import FormTextArea from './Form/FormTextArea';
import GifSearch from './GifSearch';
import Dropdown from './Dropdown';
import FormInput from './Form/FormInput';
import FormControl from './Form/FormControl';
import AlertDialog from './AlertDialog';

const Chat = ({ currentUser, selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [showGifSearchBar, setShowGifSearchBar] = useState(false);
    const [showImgSelector, setShowImgSelector] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const room = [currentUser, selectedUser.username].sort().join('-');

    useEffect(() => {
        getMessageHistory(room)
            .then(DBmessages => {
                const processedMessages = DBmessages.map(message => ({
                    ...message,
                    timestamp: new Date(message.timestamp).toISOString(),
                }));
                setMessages(processedMessages);
            })
            .catch(error => console.error('Error al cargar el historial de mensajes:', error));
        const newSocket = io.connect("http://localhost:3000", {
            auth: {
                token: getAccessToken(),
            },
        });

        setSocket(newSocket);

        newSocket.emit('join_chat', room);

        newSocket.on('receive_message', (message) => {
            if (!message.timestamp) {
                message.timestamp = new Date().toISOString();
            }
            setMessages(prevMessages => {
                // Asegura que prevMessages siempre se trate como un arreglo
                const updatedMessages = Array.isArray(prevMessages) ? prevMessages : [];
                return [...updatedMessages, message];
            });
        });

        return () => newSocket.disconnect();
    }, [room, currentUser, selectedUser.username]);

    const sendMessage = () => {
        if (!socket || !currentMessage.trim()) return;

        const message = {
            room,
            content: currentMessage,
            from: currentUser,
            to: selectedUser.username,
            type: "text"
        };

        socket.emit('send_message', message);
        setCurrentMessage("");
    };

    const handleMessageChange = (event) => setCurrentMessage(event.target.value);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    const handleGifSelect = (gif) => {
        if (!socket) return;

        const message = {
            room,
            content: gif.images.fixed_width.url,
            from: currentUser,
            to: selectedUser.username,
            type: 'gif'
        };

        socket.emit('send_message', message);
        setShowGifSearchBar(false);
    };

    const handleFileSelect = (file) => {
        const formData = new FormData();
        formData.append('imageUrl', file);

        uploadImage(formData)
            .then((response) => {
                console.log("ENTROOOO", response.imageUrl)
                const imageUrl = response.imageUrl;
                console.log("Image URL:", imageUrl);
                const message = {
                    room,
                    content: imageUrl,
                    from: currentUser,
                    to: selectedUser.username,
                    type: 'image'
                };

                socket.emit('send_message', message);
                setShowImgSelector(false);

            })
            .catch(error => {
                console.error("Failed to send image", error);
            });
    };

    return (
        <div className="h-100 chat-container">
            <div className="row h-100 align-content-start">
                <div className="row align-items-center py-3">
                    <div className="col-auto">
                        <img src={selectedUser.imageUrl} style={{ borderRadius: '50%', width: '45px', height: '45px', objectFit: 'cover' }} />
                    </div>
                    <div className="col">
                        <h2 className="m-0 h4">{selectedUser.username}</h2>
                    </div>
                </div>
                <div className="col-12 px-0 chat-box">
                    <ul className=" bg-black mb-0 p-3 h-chat">
                        {messages.map((message, index) => (
                            <li key={index} className={message.from === currentUser ? "current-user" : "other-user"}>
                                <div className="row align-items-end">
                                    <div className="col">
                                        {message.type === 'image' || message.type === 'gif' ? (
                                            <img
                                                src={message.content}
                                                alt={message.type}
                                                className={`rounded ${message.type === 'image' ? 'img-thumbnail' : 'img-thumbnail'}`}
                                            />
                                        ) : (
                                            <p>{message.content}</p>
                                        )}
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0 tag">{message.timestamp.slice(11, 16)}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-12 mt-auto">
                    <div className="row border-top p-3 bg-cream">
                        <div className="col-1 d-flex align-content-center">
                            <Dropdown
                                gif={<Button
                                    outline='black'
                                    extraClassName="px-0 py-4 text-center dropdown-item"
                                    onClick={() => setShowGifSearchBar(true)}
                                >
                                    GIF
                                </Button>}
                                img={<Button
                                    outline='black'
                                    extraClassName="px-0 py-4 text-center dropdown-item"
                                    onClick={() => setShowImgSelector(true)}
                                >
                                    IMG
                                </Button>}
                            />
                        </div>
                        <div className="col-9">

                            <form className="form-floating">
                                <FormTextArea
                                    id="message"
                                    name="message"
                                    type="text"
                                    className="h-100 p-0"
                                    onChange={handleMessageChange}
                                    rows="1"
                                    onKeyPress={handleKeyPress}
                                    value={currentMessage}
                                    placeholder="MESSAGE"
                                />
                            </form>
                        </div>
                        <div className="col-2 d-flex align-content-center">
                            <Button
                                outline='black'
                                onClick={sendMessage}>Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {showGifSearchBar && <GifSearch setShowGifSearchBar={setShowGifSearchBar} onGifSelect={handleGifSelect} />}
            {showImgSelector &&
                <AlertDialog
                    bg_color="cream"
                    text_color="black"
                    body_weight="semi-bold"
                    title="Select a file"
                    body={
                        <>
                            <form >
                                <FormControl
                                    id="file-signup-input"
                                    text="Profile Image"
                                    htmlFor="imageUrl"
                                >
                                    <FormInput
                                        name="imageUrl"
                                        type="file"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            setSelectedFile(file)
                                        }}
                                    />

                                </FormControl>
                            </form>

                        </>
                    }
                    cancelButton={{
                        text: "CLOSE",
                        onClick: () => {
                            setShowImgSelector(false);
                        },
                        type: "submit"
                    }}
                    acceptButton={{
                        text: "SEND",
                        onClick: () => {
                            handleFileSelect(selectedFile)
                            // setShowImgSelector(false)
                        },
                        type: "submit"
                    }} />
            }
        </div>
    );
};

export default Chat;
