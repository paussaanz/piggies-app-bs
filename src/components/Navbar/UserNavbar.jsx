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

    /* COMM: USE EFFECT SIN EL INTERVALO PERO NO SE ACTUALIZA AUTOMATICAMENTE */
    // useEffect(() => {
    //     if (user && user.id) {
    //         getUserNotifications(user.id)
    //             .then(notifications => {
    //                 setNotifications(notifications);
    //                 const unreadExists = notifications.some(notification => !notification.read);
    //                 setHasUnread(unreadExists);
    //             })
    //             .catch(error => {
    //                 console.error("Error:", error);
    //             });
    //     }
    // }, [user]);

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
                            console.log("NOTIS", notifications)
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            }
        };

        fetchNotifications();

        /*COMM: DESCOMENTAR PARA EL FRIDAY, NOTIFICACIONES AUTOMÁTICAS */
        // const intervalId = setInterval(fetchNotifications, 1000);

        // return () => {
        //     isMounted = false;
        //     clearInterval(intervalId);
        // };

    }, [user]);



    return (
        <>
            <nav className={`navbar navbar-expand-lg py-4 border-bottom sticky-top bg-cream ${theme} ${navbarClass}`}>
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
                title={<div className="padding-bottom">
                    <h4>NOTIFICATIONS</h4>
                </div>}
                body={
                    <div className="border-top">
                        {notifications.map(notification => (
                            <div className="border-bottom" key={notification._id}> 

                                <p className={`text-center tag p-4 text-uppercase m-0 ${notification.message === "La tarea ha sido marcada como completada." || notification.message === "Has sido añadido a la tarea."
                                        ? "text-success" 
                                        : "text-danger"
                                    }`}> {notification.message}</p>

                            </div>
                        ))}

                    </div>
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