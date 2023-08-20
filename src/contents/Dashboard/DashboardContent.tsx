import React from 'react';
import '../../styles/DashboardContent.css';

const DashboardContent: React.FC = () => {
  return (
    <div className="dashboard-content">
      <h1 className="dashboard-heading">Bem-vindo ao Dashboard</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat lacus vitae
        dignissim malesuada. Vivamus non maximus sapien, ut rhoncus purus. Nullam eu massa
        vel sapien ultrices maximus.
      </div>
      <button className="chat-button">Chat</button>
    </div>
  );
};

export default DashboardContent;