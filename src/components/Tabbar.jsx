import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Button from './Button'
import TaskBar from './TaskBar';

const Tabbar = ({ tasks, activeTab, setActiveTab}) => {

  const tabs = [
    {
      key: 0,
      title: 'All Tasks',
    },
    {
      key: 1,
      title: 'Pending',
    },
    {
      key: 2,
      title: 'Done',
    },
  ]

  return (
    <div>
      <div className="text-center">
        <div className="d-flex g-3 py-5">
          {
            tabs.map(tab => (
                <Button key={tab.key} extraClassName={"me-3"} active={tab.title === activeTab} onClick={() => setActiveTab(tab.title)}>
                     {tab.title}
                </Button>
            ))
          }
        </div>

      </div>
      <div className="pb-4">
        <TaskBar tasks={tasks} type="checkbox"/> 
      </div>
    </div>
  )
}

export default Tabbar;