import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

const ConfirmationPage: React.FC = () => {
  const { email } = useParams<{ email: string }>();
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/confirmation-mail`;
        const response = await axios.post(apiUrl, {
          email: email
        });

        console.log('Email confirmado com sucesso:', response.data);
        setIsConfirmed(true);
      } catch (error) {
        console.error('Erro ao confirmar o email:', error);
      }
    };

    confirmEmail();
  }, [email]);

  useEffect(() => {
    if (isConfirmed) {
      const redirectTimeout = setTimeout(() => {
        navigate('/login'); 
      }, 3000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [isConfirmed, navigate]);

  return (
    <div>
      {isConfirmed ? (
        <Alert severity="success">
          Seu email foi confirmado com sucesso! Você será redirecionado para a tela de login em 3 segundos.
        </Alert>
      ) : (
        <div>Confirmando email...</div>
      )}
    </div>
  );
};

export default ConfirmationPage;