import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Tabbar from "../components/Tabbar";
import Button from "../components/Button";
import ThemeToggler from "../components/ThemeToggler"
import AlertDialog from "../components/AlertDialog";
import FormControl from "../components/Form/FormControl";
import FormInput from "../components/Form/FormInput";
import { editProfileService, editProfilePicService } from "../services/AuthService";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { fetchCurrentUser, user } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('All Tasks');
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editingProfile, setEditingProfile] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    username: user.username,
    password: user.password,
    imageUrl: user.imageUrl,
    newPassword: '',
    confirmNewPassword: ''
  });
  const location = useLocation();
  const currentPage = location.pathname;
  const [showEditPic, setShowEditPic] = useState(false);

  const getTasks = () => {
    if (activeTab !== "All Tasks") {
      return user.tasks.filter((task) => {
        if (activeTab === 'Done') {
          return task.status === true 
        } else {
          return task.status === false
        }
      })
    } else {
      return user.tasks
    }
  }

  const handleEditingProfile = (e) => {
    setEditingProfile((prevProfile) => ({
      ...prevProfile,
      [e.target.name]: e.target.value,
    }));
  }

  const editProfile = () => {
    if (!validatePasswordUpdate()) {
      return;
    }

    const payload = { ...editingProfile };
    delete payload.confirmNewPassword;


    if (payload.newPassword) {
      payload.password = payload.newPassword;
      delete payload.newPassword;
    }

    editProfileService(user._id, payload)
      .then((updatedUser) => {
        fetchCurrentUser();
        setShowEditProfile(false);
      })
      .catch(error => {
        console.error("Failed to update profile:", error);
      });
  };

  const editProfilePic = (file) => {
    const formData = new FormData();
    formData.append('imageUrl', file);

    console.log("FILE", file, "FORMDATA", formData)

    editProfilePicService(user._id, formData)
      .then((updatedUser) => {
        fetchCurrentUser();
        setShowEditPic(false); // Hide the profile picture edit UI
      })
      .catch(error => {
        console.error("Failed to update profile picture:", error);
      });
  };

  const validatePasswordUpdate = () => {
    const { newPassword, confirmNewPassword } = editingProfile;
    if (!newPassword) {
      return true;
    }

    if (!newPassword || newPassword.length < 8) {
      return false;
    }
    if (newPassword !== confirmNewPassword) {
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-2">
        </div>
        <div className="col-10 ps-5">
          <div className="row">
            <div className="col-10">
              <h4 className="tag weigh-regular pt-4 pb-3">Profile</h4>
            </div>
            <div className="col-auto icons-black icons-small">
              <Button
                extraClassName="p-3 icon-edit"
                onClick={() =>
                  setShowEditProfile(true)
                }
              />
              <ThemeToggler/>
            </div>
          </div>
          <div className="row align-items-center p-3">
            <div className="user-image-container p-0" onClick={() => setShowEditPic(true)}>
              <img src={user.imageUrl} alt="User" className="rounded-circle user-image" />
            </div>
            <div className="col">
              <h4 className="h5 weight-regular m-0">{user.name} {user.surname}</h4>
              <div className="row">
                <div className="col-auto">
                  <h4 className="tag weight-rgular m-0 py-1">@{user.username}</h4>
                </div>
                <div className="col-auto">
                  <h4 className="tag weight-reular m-0 py-1">{user.email}</h4>
                </div>
              </div>
              <h4 className="tag weight-reguar m-0">Comm Intern</h4>
            </div>
          </div>

          <Tabbar currentPage={currentPage} getTasks={fetchCurrentUser} tasks={getTasks()} activeTab={activeTab} setActiveTab={setActiveTab} />

        </div>
      </div>

      {showEditProfile && <AlertDialog
        bg_color="cream"
        body_weight="semi-bold"
        title="Edit profile"
        body={
          <form className="row" key={user._id}>
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <FormControl
                    text="Name"
                    htmlFor="name"
                  >
                    <FormInput
                      id="taskName"
                      name="name"
                      type="text"
                      onChange={handleEditingProfile}
                      value={editingProfile.name}
                    />
                  </FormControl>
                </div>
                <div className="col-6">
                  <FormControl
                    text="Surname"
                    htmlFor="surname"
                  >
                    <FormInput
                      id="userSurname"
                      name="surname"
                      type="text"
                      onChange={handleEditingProfile}
                      value={editingProfile.surname}
                    />
                  </FormControl>
                </div>
                <div className="col-6">
                  <FormControl
                    text="Email"
                    htmlFor="email"
                  >
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleEditingProfile}
                      value={editingProfile.email}
                    />
                  </FormControl>
                </div>
                <div className="col-6">
                  <FormControl
                    text="Username"
                    htmlFor="username"
                  >
                    <FormInput
                      id="userUsername"
                      name="username"
                      type="text"
                      onChange={handleEditingProfile}
                      value={editingProfile.username}
                    />
                  </FormControl>
                </div>
                <div className="col-6">
                  <FormControl text="New Password" htmlFor="newPassword">
                    <FormInput
                      id="newPassword"
                      name="newPassword"
                      value={editingProfile.newPassword || ''}
                      placeholder="Enter new password"
                      type="password"
                      onChange={handleEditingProfile}
                    />
                  </FormControl>
                </div>
                <div className="col-6">
                  <FormControl text="Confirm New Password" htmlFor="confirmNewPassword">
                    <FormInput
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      value={editingProfile.confirmNewPassword || ''}
                      placeholder="Confirm new password"
                      type="password"
                      onChange={handleEditingProfile}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </form>
        }
        cancelButton={{
          text: "CLOSE",
          onClick: () => {
            setShowEditProfile(false)
          },
          type: "submit"
        }}
        acceptButton={{
          text: "ACCEPT",
          onClick: () => {
            editProfile()
          },
          type: "submit"
        }}
      />}

      {showEditPic && (
        <AlertDialog
          bg_color="cream"
          body_weight="semi-bold"
          title="Edit your image"
          body={
            <form>
              <FormControl
                id="file-signup-input"
                htmlFor="imageUrl">
                <FormInput
                  name="imageUrl"
                  type="file"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    editProfilePic(file);
                  }}
                />
              </FormControl>
            </form>
          }
          cancelButton={{
            text: "CLOSE",
            onClick: () => {
              setShowEditPic(false)
            },
            type: "submit"
          }}
          acceptButton={{
            text: "ACCEPT",
            onClick: () => {
              editProfilePic()
            },
            type: "submit"
          }}
        />
      )}
    </div >


  );
};

export default ProfilePage;