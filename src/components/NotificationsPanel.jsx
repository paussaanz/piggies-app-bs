import { useContext, useEffect, useState } from "react";
import { getUserNotifications } from "../services/NotificationService";
import AuthContext from "../contexts/AuthContext";

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user && user.id) {
      getUserNotifications(user.id)
        .then(userNotifications => {
          setNotifications(userNotifications);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }, []);

  return (
    <div className="AlertDialogOverlay">
      <div className="AlertDialogContent bg-cream">
        {notifications.map(notification => (
          <div >
            <p className={`text-center tag pt-2 pb-4 text-uppercase ${notification.added ? "text-success" : "text-danger"}`}>
              {notification.added ? `YOU HAVE BEEN ADDED TO ${notification.taskId.name}` : `YOU ARE NO LONGER ADDED TO ${notification.taskId.name}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;