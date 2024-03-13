// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { getAccessToken } from '../stores/AccessTokenStore';

// const Chat = ({ currentUser, selectedUser }) => {
//     const [messages, setMessages] = useState([]);
//     const [currentMessage, setCurrentMessage] = useState(""); 
//     const [socket, setSocket] = useState(null);

//     useEffect(() => {
//         const newSocket = io.connect("http://localhost:3000", {
//             auth: {
//                 token: getAccessToken(), 
//             },
//         });

//         setSocket(newSocket);

//         const room = [currentUser, selectedUser].sort().join('-');

//         newSocket.emit('join_chat', room);

//         newSocket.on('receive_message', (message) => {
//             setMessages((prevMessages) => {
//                 return [...prevMessages, message];
//             });
//         });

//         return () => {
//             newSocket.disconnect();
//         };
//     }, [currentUser, selectedUser]);

//     const sendMessage = () => {
//         if (!socket || !currentMessage.trim()) return;

//         const room = [currentUser, selectedUser].sort().join('-');
//         const message = {
//             room,
//             content: currentMessage,
//             from: currentUser,
//             to: selectedUser,
//         };

//         socket.emit('send_message', message);
//         setCurrentMessage(""); 
//     };

//     const handleMessageChange = (event) => {
//         setCurrentMessage(event.target.value);
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter' && !event.shiftKey) {
//             event.preventDefault();
//             sendMessage();
//         }
//     };

//     return (
//         <div>
//             <h2>Chat with {selectedUser}</h2>
//             <ul>
//                 {messages.map((message, index) => (
//                     <li key={index}>{message.from}: {message.content}</li>
//                 ))}
//             </ul>
//             <textarea
//                 value={currentMessage}
//                 onChange={handleMessageChange}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Write a message..."
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default Chat;
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getAccessToken } from '../stores/AccessTokenStore';
import { getMessageHistory } from '../services/MessageService';

const Chat = ({ currentUser, selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [socket, setSocket] = useState(null);

    const room = [currentUser, selectedUser].sort().join('-');

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
    }, [room, currentUser, selectedUser]);

    const sendMessage = () => {
        if (!socket || !currentMessage.trim()) return;

        const message = {
            room,
            content: currentMessage,
            from: currentUser,
            to: selectedUser,
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

    return (
        <div>
            <h2>Chat with {selectedUser}</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.from}: {message.content}</li>
                ))}
            </ul>
            <textarea
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
                placeholder="Write a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
