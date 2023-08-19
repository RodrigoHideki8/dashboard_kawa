import React, { useState } from 'react'
import { Container, Typography, Button, Pagination   } from '@mui/material'
import ReactPaginate from 'react-paginate'
import '../styles/ClientsPage.css'
import DashboardMenu from '../contents/Dashboard/DashboardMenu'

const clients = [
  {
    id: 1,
    name: 'Cliente 1',
    phone: '123-456-7890',
    email: 'cliente1@example.com'
  },
  {
    id: 2,
    name: 'Cliente 2',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 3,
    name: 'Cliente 3',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 4,
    name: 'Cliente 4',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 5,
    name: 'Cliente 5',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 6,
    name: 'Cliente 6',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 7,
    name: 'Cliente 7',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 8,
    name: 'Cliente 8',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  },
  {
    id: 9,
    name: 'Cliente 9',
    phone: '987-654-3210',
    email: 'cliente2@example.com'
  }
]
const clientsPerPage = 8;
const ClientListPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
    };
  
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
  
    return (
      <div className='clients-container-content'>
        <DashboardMenu />
        <Container maxWidth="md" className="futuristic-container">
          <Typography variant="h4" gutterBottom className="futuristic-heading">
            Lista de Clientes
          </Typography>
          <div className="client-list">
            {currentClients.map(client => (
              <div key={client.id} className="client-item">
                <div className="client-details">
                  <div className="client-name">{client.name}</div>
                  <div className="client-info">
                    <p>Telefone: {client.phone}</p>
                    <p>Email: {client.email}</p>
                  </div>
                </div>
                <div className="client-actions">
                  {/* Adicione ações aqui, se necessário */}
                </div>
              </div>
            ))}
          </div>
          <Pagination
            className="pagination"
            count={Math.ceil(clients.length / clientsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Container>
      </div>
    );
  };

export default ClientListPage
