import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getAccessToken } from '../stores/AccessTokenStore';
import { getMessageHistory } from '../services/MessageService';
import Button from "../components/Button";
import FormTextArea from './Form/FormTextArea';

const Chat = ({ currentUser, selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [socket, setSocket] = useState(null);

    const room = [currentUser, selectedUser.username].sort().join('-');

    useEffect(() => {

        getMessageHistory(room)
            .then(DBmessages => {
                console.log(DBmessages);
                setMessages(DBmessages)
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
        };

        socket.emit('send_message', message);
        setCurrentMessage("");
        console.log(message, "mensajeee")
    };

    const handleMessageChange = (event) => setCurrentMessage(event.target.value);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="h-100 ">
            <div className="row h-100 align-content-start">
                <div className="row align-items-center py-3">
                    <div className="col-auto">
                        <img src={selectedUser.imageUrl} style={{ borderRadius: '50%', width: '45px', height: '45px', objectFit: 'cover' }} />
                    </div>
                    <div className="col">
                        <h2 className="m-0 h4">{selectedUser.username}</h2>
                    </div>
                </div>
                <div className="col-12 px-0">
                    <ul className="bg-black mb-0 p-3 h-chat">
                        {messages.map((message, index) => (
                            <li key={index} className={message.from === currentUser ? "current-user" : "other-user"}>
                                <div className="row align-items-end">
                                    <div className="col">
                                        {message.content}
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
                    <div className="row border-top p-3 bg-cream align-items-center">
                        <div className="col-10">

                            <form className="form-floating">
                                <FormTextArea
                                    id="message"
                                    name="message"
                                    type="text"
                                    className="h-100"
                                    onChange={handleMessageChange}
                                    rows="1"
                                    onKeyPress={handleKeyPress}
                                    value={currentMessage}
                                    placeholder="MESSAGE"
                                />
                            </form>
                        </div>
                        <div className="col-auto">
                            <Button
                                outline='black'
                                onClick={sendMessage}>Send</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
