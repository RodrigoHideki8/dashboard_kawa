import React from 'react';
import '../styles/Notification.css';

interface NotificationProps {
  message: string;
  type: 'error' | 'success';
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;