import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3000")

function MessagingPage() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = () => {
    if (currentMessage && username) {
      const message = { username, text: currentMessage };
      socket.emit('message', message);
      setCurrentMessage('');
    }
  };

  return (
    <div>
    
      <input
        placeholder="Message"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>: {msg.text}</div>
        ))}
      </div>
    </div>
  );
}

export default MessagingPage;
