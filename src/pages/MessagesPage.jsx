import React, { useState, useEffect, useContext } from 'react';
import Chat from '../components/Chat';
import { getUsers } from '../services/UserService';
import AuthContext from '../contexts/AuthContext';

function MessagingPage() {
  const { user } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(setUsers); 
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  console.log("USER", user)
  console.log("SELECTED EN LA PAGE", selectedUser)

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-2">
        </div>
        <div className="col-10 h-100">
          <div className="row  bg-cream h-100">
            <div className="col-2 border-end">
                {users.map((user) => (
                  <div className="row py-2 border-bottom align-items-center" key={user.id} onClick={() => {
                    handleUserSelect(user)
                  }}>
                        <div className="col-auto">
                          <img src={user.imageUrl} style={{ borderRadius: '50%', width: '55px', height: '55px', objectFit: 'cover' }} />
                        </div>
                        <div className="col">
                          <p className="m-0">@{user.username}</p>
                        </div>
                      </div>
                ))}
            </div>
            <div className="col-10 h-100">
              {selectedUser && (
                <Chat currentUser={user.username} selectedUser={selectedUser} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;
