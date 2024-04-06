import { useContext, useEffect, useState } from "react";
import { getUserNotifications } from "../services/NotificationService";
import AuthContext from "../contexts/AuthContext";

const NotificationsPanel = (userId) => {
    const [notifcations, setNotifications] = useState([]);
    const { user } = useContext(AuthContext)

    const getNotifications = () => {
        getUserNotifications(user.id)
          .then(userNotifications => {
            setNotifications(userNotifications)
            console.log(userNotifications)
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }

    //   getNotifications()
      console.log(notifcations)

    return (
        <div>
            <h2>Notificaciones</h2>
            {notifcations.map(notifcation => (
                <div key={notifcation._id}>
                     <p>{notifcation.mensaje}</p>
                </div>
            ))} 
        </div>
    );
};

export default NotificationsPanel;