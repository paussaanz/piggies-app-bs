import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours()
                    + ":" +
                    new Date(Date.now()).getMinutes()
            };
            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("")

        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])

    return (
        <div>
            <div className="chat-header">
                <p>Live chat</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                        return <div className="message" id={username === messageContent.author ? "you" : "other"}> <div>
                        </div>
                            <div className="message-content">
                                <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                                <p id="time">{messageContent.time} </p>
                                <p id="author">{messageContent.author} </p>
                            </div>

                        </div>
                    })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Write here"
                    onChange={(e) => {
                        setCurrentMessage(e.target.value)
                    }}
                    onKeyPress={(event) => { event.key === "Enter" && sendMessage() }} />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
};

export default Chat;



// const Chat = ({ socket, username, contact }) => {
//     const [currentMessage, setCurrentMessage] = useState("");
//     const [messageList, setMessageList] = useState([]);

//     const sendMessage = async () => {
//         if (currentMessage !== "") {
//             const messageData = {
//                 // Asume que el backend asigna la sala basada en los usuarios involucrados
//                 author: username,
//                 contact: contact, // Agrega el contacto al mensaje
//                 message: currentMessage,
//                 time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
//             };
//             await socket.emit("send_message", messageData);
//             setMessageList((list) => [...list, messageData]);
//             setCurrentMessage("");
//         }
//     };

//     useEffect(() => {
//         socket.on("receive_message", (data) => {
//             // Solo agrega el mensaje si es relevante para el chat actual
//             if (data.author === contact || data.contact === username) {
//                 setMessageList((list) => [...list, data]);
//             }
//         });
//     }, [socket, contact, username]);

//     return (
//         <div>
//             <div className="chat-header">
//                 <p>Live chat</p>
//             </div>
//             <div className="chat-body">
//                 <ScrollToBottom className="message-container">
//                     {messageList.map((messageContent) => {
//                         return <div className="message" id={username === messageContent.author ? "you" : "other"}> <div>
//                         </div>
//                             <div className="message-content">
//                                 <p>{messageContent.message}</p>
//                             </div>
//                             <div className="message-meta">
//                                 <p id="time">{messageContent.time} </p>
//                                 <p id="author">{messageContent.author} </p>
//                             </div>

//                         </div>
//                     })}
//                 </ScrollToBottom>
//             </div>
//             <div className="chat-footer">
//                 <input
//                     type="text"
//                     value={currentMessage}
//                     placeholder="Write here"
//                     onChange={(e) => {
//                         setCurrentMessage(e.target.value)
//                     }}
//                     onKeyPress={(event) => { event.key === "Enter" && sendMessage() }} />
//                 <button onClick={sendMessage}>&#9658;</button>
//             </div>
//         </div>
//     )
// };
// export default Chat;