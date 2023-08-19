import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ConfirmationPage from './pages/ConfirmationMailPage'
import SentMailPage from './pages/SentMailPage'
import ProductsPage from './pages/ProductsPage'
import FinancialPage from './pages/FinancialPage'
import ProjectPage from './pages/ProjectsPage'
import ProfilePage from './pages/UserProfile'
import ClientListPage from './pages/ClientsPage'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/clients" element={<ClientListPage />} /> 
        <Route path='/financial' element={<FinancialPage />} />
        <Route path='/sent-mail' element={<SentMailPage />} />
        <Route path='/confirmation-mail' element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App
