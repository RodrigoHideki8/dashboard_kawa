import React from 'react';
import { Alert } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Alert severity="error" style={{ margin: '10px 0', textAlign: 'center' }}>
      {message}
    </Alert>
  );
};

export default ErrorMessage;