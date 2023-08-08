import React, { useState } from 'react';
import { Container } from '@mui/material';
import Notification from './Notification';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: 'error' | 'success';
  } | null>(null);

  return (
    <Container>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      {children}
    </Container>
  );
};

export default AppLayout;