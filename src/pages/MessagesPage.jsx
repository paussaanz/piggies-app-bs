import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import Chat from '../components/Chat';
import DashboardMenu from '../components/Navbar/DashboardMenu';

const socket = io.connect("http://localhost:3000")

function MessagingPage() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  // const [contact, setContact] = useState("");
  const [showChat, setShowChat] = useState(false);


  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  const joinChat = () => {
    if (username !== "" && contact !== "") {
      const chatSessionId = createOrGetChatSession(username, contact);

      socket.emit("join_chat", chatSessionId)
      setShowChat(true)
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
        </div>

        <div className="col-10 pt-5 ps-5 joinChatContainer">
          {!showChat ? (
            <div className="joinChatContainer">
              <h3>Join a chat</h3>
              <input type="text" placeholder="Enter your name"
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
              <input type="text" placeholder="Enter a room name"
                onChange={(e) => {
                  setRoom(e.target.value)
                }} />
              <button onClick={joinRoom}>Join the room</button>
            </div>
          ) : (
            <Chat socket={socket} username={username} room={room} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;

// import React, { useState, useEffect, useContext } from 'react';
// import io from 'socket.io-client';
// import Chat from '../components/Chat';
// import { getUsers } from '../services/UserService';
// import AuthContext from "../contexts/AuthContext";


// const socket = io.connect("http://localhost:3000");

// function MessagingPage() {
//   const { user } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [contact, setContact] = useState("");
//   const [showChat, setShowChat] = useState(false);
//   const [users, setUsers] = useState([]); // Estado para almacenar los usuarios

//   useEffect(() => {
//     getUsers()
//       .then(users => {
//         setUsers(users);
//       });
//   }, []);

//   const joinChat = (contactUsername) => {
//     if (user.username && contactUsername) {
//       const chatSessionId = `${user.username}_${contactUsername}`;
//       socket.emit("join_chat", chatSessionId);
//       setContact(contactUsername);
//       setShowChat(true);
//     }
//   };


//   return (
//     <div className="container-fluid">
      
//       <div className="row">
//         <div className="col-3">
//           <ul className="list-group">
//             {users.map(user => (
//               <li key={user.id} className="list-group-item list-group-item-action" onClick={() => joinChat(user.username)}>
//                 {user.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-9">
//           {showChat ? <Chat socket={socket} username={user.username} contact={contact} /> : <div>Selecciona un usuario para empezar a chatear</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MessagingPage;
