import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ConfirmationPage from './pages/ConfirmationMailPage'
import SentMailPage from './pages/SentMailPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Use o componente Routes */}
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route
          path='/sent-mail'
          element={<SentMailPage />} // Não é mais necessário passar 'location' como prop
        />
        <Route path='/confirmation-mail' element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App
