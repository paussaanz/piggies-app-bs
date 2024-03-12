import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Tabbar from "../components/Tabbar";
import Button from "../components/Button";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('All Tasks');
  const { fetchCurrentUser, user } = useContext(AuthContext)

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

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-2">
        </div>
        <div className="col-10 pt-5 ps-5">
          <div className="row">
            <div className="col-10">
              <h4 className="fs-6 weight-regular pt-4 pb-3">Profile</h4>
            </div>
            <div className="col-auto icons-black">
              <Button extraClassName="p-3 icon-edit" />
            </div>
          </div>
          <div className="row align-items-center p-3">
            <div className="col-auto">
              <img src={user.imageUrl} className="rounded-circle" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
            <div className="col">
              <h4 className="h5 weight-regular m-0">Paula Sanz</h4>
              <div className="row">
                <div className="col-auto">
                  <h4 className="fs-6 weight-regular m-0 py-1">@{user.username}</h4>
                </div>
                <div className="col-auto">
                  <h4 className="fs-6 weight-regular m-0 py-1">{user.email}</h4>
                </div>
              </div>
              <h4 className="fs-6 weight-regular m-0">Comm Intern</h4>
            </div>
          </div>

          <Tabbar getTasks={fetchCurrentUser} tasks={getTasks()}  activeTab={activeTab} setActiveTab={setActiveTab} />
        
        </div>
      </div>

    </div>


  );
};

export default ProfilePage;