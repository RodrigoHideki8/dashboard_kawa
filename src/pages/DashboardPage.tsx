import React, { useState } from 'react'
import DashboardMenu from '../contents/Dashboard/DashboardMenu'
import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom'
import WhatsAppButton from '../components/Whatsapp/Whatsapp'
import '../styles/Responsive.css'
import { Popover, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

const DashboardPage: React.FC = () => {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    // Aqui você pode definir suas notificações, por exemplo:
    { title: 'Nova mensagem', message: 'Você tem uma nova mensagem.' },
    {
      title: 'Atualização',
      message: 'Uma atualização importante está disponível.'
    }
  ])

  const handleNotificationOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
    setNotificationOpen(true)
  }

  const handleNotificationClose = () => {
    setNotificationOpen(false)
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    // Implemente a lógica para fazer logout
    navigate('/login')
  }

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  return (
    <div className='dashboard-container'>
      <DashboardMenu />
      <div className='dashboard-content'>
        <div className='dashboard-profile'></div>
        <div className='notification-icon' onClick={handleNotificationOpen}>
          <NotificationsIcon />
        </div>{' '}
        <Popover
          open={notificationOpen}
          anchorEl={anchorEl}
          onClose={handleNotificationClose}
          anchorOrigin={{
            vertical: 'top', 
            horizontal: 'right' 
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {notifications.map(notification => (
            <div key={notification.title}>
              <Typography>{notification.title}</Typography>
              <Typography>{notification.message}</Typography>
            </div>
          ))}
        </Popover>
        <div className='dashboard-heading'>
          <h4>Bem-vindo ao Dashboard Kawa Tech</h4>
        </div>
      </div>
      <button className='logout-button' onClick={handleLogout}>
        Logout
      </button>
      <WhatsAppButton />
    </div>
  )
}

export default DashboardPage
