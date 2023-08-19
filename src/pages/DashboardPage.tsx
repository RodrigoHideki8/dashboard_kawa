import React from 'react';
import DashboardMenu from '../contents/Dashboard/DashboardMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/DashboardPage.css';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/Whatsapp/Whatsapp';
import '../styles/Responsive.css'; 

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implemente a lógica para fazer logout
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <DashboardMenu />
      <div className="dashboard-content">
        <div className="dashboard-profile">
        </div>
        <div className="dashboard-heading">
          <h4>Bem-vindo ao Dashboard Kawa Tech</h4>
        </div>
     
      </div>

      {/* Botão de Logout */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <WhatsAppButton />
      
    </div>
  );
};

export default DashboardPage;