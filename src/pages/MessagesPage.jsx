import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import Chat from '../components/Chat';
import DashboardMenu from '../components/Navbar/DashboardMenu';

const socket = io.connect("http://localhost:3000")

function MessagingPage() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <DashboardMenu />
        </div>
        <div className="col-10 pt-5">

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

        <Chat socket={socket} username={username} room={room} />
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;
