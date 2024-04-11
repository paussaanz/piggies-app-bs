// COMM: ESTO FUNCIONA
//import Button from './Button'
// import TaskBar from './TaskBar';

// const Tabbar = ({ getTasks, tasks, activeTab, setActiveTab, users }) => {

//   const tabs = [
//     {
//       key: 0,
//       title: 'All Tasks',
//     },
//     {
//       key: 1,
//       title: 'Pending',
//     },
//     {
//       key: 2,
//       title: 'Done',
//     },
//   ]

//   return (
//     <div>
//       <div className="text-center">
//         <div className="d-flex g-3 py-5">
//           {
//             tabs.map(tab => (
//               <Button
//                 key={tab.key}
//                 extraClassName="me-3"
//                 active={tab.title === activeTab}
//                 onClick={() => setActiveTab(tab.title)}>
//                 {tab.title}
//               </Button>
//             ))
//           }
//         </div>

//       </div>
//       <div className="pb-4">
//         <TaskBar getTasks={getTasks} tasks={tasks} users={users} type="checkbox" />
//       </div>
//     </div>
//   )
// }

// export default Tabbar;

import React from 'react';
import Button from './Button';
import TaskBar from './TaskBar';
import ProjectManageCard from './ProjectManageCard';

const Tabbar = ({ currentPage, getTasks, tasks, getForms, forms, activeTab, setActiveTab, users }) => {
  const tabs = {
    '/dashboard': [
      { key: 'allTasks', title: 'All Tasks' },
      { key: 'pendingTasks', title: 'Pending' },
      { key: 'doneTasks', title: 'Done' },
    ],
    '/profile': [
      { key: 'allTasks', title: 'All Tasks' },
      { key: 'pendingTasks', title: 'Pending' },
      { key: 'doneTasks', title: 'Done' },
    ],
    '/projects-management': [
      { key: 'allForms', title: 'All Forms' },
      { key: 'pendingForms', title: 'Pending' },
      { key: 'doneForms', title: 'Done' },
    ],
  };

  const renderTabs = (currentTabs) => {
    return currentTabs.map(tab => (
      <Button
        key={tab.key}
        extraClassName="me-3"
        active={tab.title === activeTab}
        onClick={() => setActiveTab(tab.title)}
      >
        {tab.title}
      </Button>
    ));
  };

  const renderContent = () => {
    switch (currentPage) {
      case '/dashboard':
      case '/profile':
        return <TaskBar getTasks={getTasks} tasks={tasks} users={users} type="checkbox" />;
      case '/projects-management':
        return <ProjectManageCard forms={forms} getTasks={getTasks} />;
      default:
        return <div>Please select a tab.</div>;
    }
  };

  return (
    <div>
      <div className="text-center sticky-top w-100 bg-cream" style={{  zIndex: '1030' }}>
        <div className="d-flex g-3 py-5">
          {renderTabs(tabs[currentPage] || [])}
        </div>
      </div>
      <div className="pb-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabbar;

