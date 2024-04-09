import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getUserNotifications, markAsRead } from "../../services/NotificationService";
import AlertDialog from '../../components/AlertDialog';
import AuthContext from "../../contexts/AuthContext";


const UserNavbar = ({ currentUser }) => {
    const [navbarClass, setNavbarClass] = useState('navbar-visible');
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [openNotifications, setOpenNotifications] = useState(false)
    const [notifications, setNotifications] = useState([]);
    const [hasUnread, setHasUnread] = useState(false);
    const { user } = useContext(AuthContext)
    const { theme } = useTheme();

    const markNotificationsAsRead = () => {
        if (user && user.id) {
            markAsRead(user.id)
                .then(() => {
                    getUserNotifications(user.id).then(notifications => {
                        setNotifications(notifications);
                        setHasUnread(false);
                    });
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    };

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setNavbarClass('navbar-hidden');
            } else {
                setNavbarClass('navbar-visible');
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    useEffect(() => {
        let isMounted = true;

        const fetchNotifications = () => {
        if (user && user.id) {
            getUserNotifications(user.id)
                .then(notifications => {
                    if (isMounted) {
                    setNotifications(notifications);
                    const unreadExists = notifications.some(notification => !notification.read);
                    setHasUnread(unreadExists);
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    }

    /*DESCOMENTAR ESTO PAL FRIDAY, NOTIFICACIONES AUTOMATICAS*/ 
    // const intervalId = setInterval(fetchNotifications, 7000);

    // return () => {
    //     isMounted = false;
    //     clearInterval(intervalId);
    // };
}, [user]); 


    return (
        <>
            <nav className={`navbar navbar-expand-lg py-4 border-bottom sticky-top ${theme} ${navbarClass}`}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="navbar-nav align-items-center w-100 justify-content-between px-5">
                            <li className="nav-item text-uppercase weight-semi-bold">
                                {location.pathname}
                            </li>
                            <div className="d-flex align-items-center gap-4">
                                <li className=" nav-item img-fluid icon-bell" onClick={() => {
                                    setOpenNotifications(true)
                                    markNotificationsAsRead()
                                }}>
                                    {hasUnread && <span className="unread-dot"></span>}
                                </li>

                                <Link to="/profile">
                                    {currentUser ? (
                                        <li className="nav-item">
                                            <img src={currentUser.imageUrl} alt="User profile" style={{ borderRadius: '50%', width: '35px', height: '35px', objectFit: 'cover' }} />
                                        </li>
                                    ) : (
                                        null
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {openNotifications && <AlertDialog
                bg_color="cream"
                text_color="black"
                body_weight="semi-bold"
                body={
                    <>
                        {notifications.map(notification => (
                            <div >
                                <p className={`text-center tag pt-2 pb-4 text-uppercase ${notification.added ? "text-success" : "text-danger"}`}>
                                    {notification.added ? `YOU HAVE BEEN ADDED TO ${notification.taskId.name}` : `YOU ARE NO LONGER ADDED TO ${notification.taskId.name}`}
                                </p>
                            </div>
                        ))}

                    </>
                }
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setOpenNotifications(false);
                    },
                    type: "submit"
                }}
            />
            }
        </>
    );
};

export default UserNavbar;