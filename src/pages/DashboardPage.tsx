import React, { useState } from 'react';
import DashboardMenu from '../contents/Dashboard/DashboardMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';
import '../styles/DashboardPage.css';
import { useHistory } from 'react-router-dom';
import WhatsAppButton from '../components/Whatsapp/Whatsapp';
import ErrorMessage from '../components/ErrorMessages'; // Importe o componente ErrorMessage
import SuccessMessage from '../components/SuccessMessages'; // Importe o componente SuccessMessage
import '../styles/Responsive.css'; 

const DashboardPage: React.FC = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para mensagens de erro
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Estado para mensagens de confirmação

  const handleLogout = () => {
    // Implemente a lógica para fazer logout
    history.push('/login');
  };

  const handleShowErrorMessage = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000); // Limpa a mensagem de erro após 5 segundos
  };

  const handleShowSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000); // Limpa a mensagem de confirmação após 5 segundos
  };

  return (
    <div className="dashboard-container">
      <DashboardMenu />
      <div className="dashboard-content">
        <div className="dashboard-profile">
          {/* Ícone do Perfil de Usuário com a classe profile-icon */}
          <AccountCircleIcon className="profile-icon" />
          <span className="profile-text">Nome do Usuário</span>
        </div>
        <div className="dashboard-heading">
          <h4>Bem-vindo ao Dashboard Kawa Tech</h4>
        </div>
        {/* Conteúdo do Dashboard */}
        <Button variant="contained" color="primary" onClick={() => handleShowErrorMessage("Erro ao carregar dados!")}>
          Exibir Mensagem de Erro
        </Button>
        <Button variant="contained" color="success" onClick={() => handleShowSuccessMessage("Dados salvos com sucesso!")}>
          Exibir Mensagem de Confirmação
        </Button>
      </div>

      {/* Botão de Logout */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <WhatsAppButton />
      
      <div className="messages">
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {successMessage && <SuccessMessage message={successMessage} />}
      </div>
    </div>
  );
};

export default DashboardPage;