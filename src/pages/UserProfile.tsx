import { Container, Typography } from '@mui/material';
import DashboardMenu from '../contents/Dashboard/DashboardMenu'
import '../styles/ProfilePage.css'
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    documentNumber: '',
    phoneNumber: '',
    planProfile: '',
  });

  const [isEditable, setIsEditable] = useState(false); // Para controlar se os campos são editáveis

  // Função para buscar os dados do perfil do usuário (simulada aqui)
  const fetchUserProfileData = () => {
    // Simulação de uma requisição para obter os dados do perfil
    const userProfileData = {
      name: 'Nome do Usuário',
      email: 'usuario@email.com',
      password: 'senha123',
      address: 'Endereço do Usuário',
      documentNumber: '123456789',
      phoneNumber: '1199887658',
      planProfile: 'Plano Padrão',
    };

    setUserData(userProfileData);
  };

  // Função para ativar a edição dos campos
  const enableEdit = () => {
    setIsEditable(true);
  };

  // Função para salvar as alterações no perfil
  const saveProfile = () => {
    // Implemente a lógica para salvar as alterações no perfil do usuário,
    // por exemplo, enviando os dados para um servidor/API.
    console.log('Dados do perfil a serem salvos:', userData);

    // Desative a edição após salvar as alterações
    setIsEditable(false);
  };

  useEffect(() => {
    // Buscar os dados do perfil quando o componente é montado
    fetchUserProfileData();
  }, []);

  return (
    <div className='user-profile-content'>
      <DashboardMenu />
      <Container maxWidth='md' className='user-profile-container'>
      <div className='user-profile'>

        <Typography variant='h4' gutterBottom className='user-profile-heading'>
          Perfil do Usuário
        </Typography>
        <form>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={(e) => {
                if (isEditable) {
                  setUserData({ ...userData, name: e.target.value });
                }
              }}
              readOnly={!isEditable} // Torna o campo somente leitura quando não está editável
            />
          </div>
          <div>
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={userData.email}
      readOnly // Torna o campo somente leitura em todos os momentos
    />
  </div>
          <div>
            <label>Endereço:</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={(e) => {
                if (isEditable) {
                  setUserData({ ...userData, address: e.target.value });
                }
              }}
              readOnly={!isEditable}
            />
          </div>
          <div>
            <label>Número de Documento:</label>
            <input
              type="text"
              name="documentNumber"
              value={userData.documentNumber}
              onChange={(e) => {
                if (isEditable) {
                  setUserData({ ...userData, documentNumber: e.target.value });
                }
              }}
              readOnly={!isEditable}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={(e) => {
                if (isEditable) {
                  setUserData({ ...userData, phoneNumber: e.target.value });
                }
              }}
              readOnly={!isEditable}
            />
          </div>
          <div>
            <label>Perfil do Plano:</label>
            <input
              type="text"
              name="planProfile"
              value={userData.planProfile}
             
              readOnly
            />
          </div>
          {!isEditable ? (
            <button type="button" onClick={enableEdit}>
              Editar Perfil
            </button>
          ) : (
            <button type="button" onClick={saveProfile}>
              Salvar Alterações
            </button>
          )}
        </form>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;