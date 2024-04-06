import React, { useState, useEffect, useContext } from 'react';
import Chat from '../components/Chat';
import { getUsers } from '../services/UserService';
import AuthContext from '../contexts/AuthContext';

function MessagingPage() {
  const { user } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dbUsers, setDBUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(setDBUsers);
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };


  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-2">
        </div>
        <div className="col-10 h-100">
          <div className="row  bg-cream h-100">
            <div className="col-2 border-end user-chatlist">
              {dbUsers.map((dbUser) => (
                <div className="row py-2 border-bottom align-items-center"   key={dbUser.id} onClick={() => {
                  handleUserSelect(dbUser)
                }}>
                  <div className="col-auto">
                    <img src={dbUser.imageUrl} style={{ borderRadius: '50%', width: '55px', height: '55px', objectFit: 'cover' }} />
                  </div>
                  <div className="col">
                    <p className="m-0  text-truncate" style={{maxWidth: "120px"}}>@{dbUser.username}
                      {dbUser.username === user.username ? " (tú)" : ""}
                    </p>
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
