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
      .then(setUsers); // Asume una función fetchUsers que obtiene los usuarios
  }, []);

  // Función para manejar la selección de un usuario para chat
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-2">
              <ul>
                {users.map((user) => (
                  <li key={user.id} onClick={() => {
                    handleUserSelect(user.username)
                  }}>
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-10 pt-5 ps-5">
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
