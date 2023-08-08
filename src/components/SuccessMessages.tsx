import React from 'react';
import { Alert } from '@mui/material';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <Alert severity="success" style={{ margin: '10px 0', textAlign: 'center' }}>
      {message}
    </Alert>
  );
};

export default SuccessMessage;