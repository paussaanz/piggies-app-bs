import { useState } from 'react';
import clsx from 'clsx';
import AllTasks from './AllTasks';
import PendingTasks from './PendingTasks';
import DoneTasks from './DoneTasks';
import Button from './Button'

const Tabbar = () => {

  const tabs = [
    {
      key: 0,
      title: 'All Tasks',
      body: <AllTasks />,
    },
    {
      key: 1,
      title: 'Pending',
      body: <PendingTasks />,
    },
    {
      key: 2,
      title: 'Done',
      body: <DoneTasks />
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="text-center">
        <div className="d-flex g-3 py-5">
          {
            tabs.map(tab => (
                <Button extraClassName={"me-3"} active={tab.key === activeTab} onClick={() => setActiveTab(tab.key)}>
                     {tab.title}
                </Button>
            ))
          }
        </div>

      </div>
      <div className="">
        {tabs[activeTab].body}
      </div>
    </div>
  )
}

export default Tabbar;