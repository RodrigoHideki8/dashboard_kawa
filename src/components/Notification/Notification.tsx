import React from 'react'
import '../../styles/Notification.css'
interface Notification {
  title: string
  message: string
}

interface NotificationPopupProps {
  isOpen: boolean
  onClose: () => void
  notifications: Notification[]
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  isOpen,
  onClose,
  notifications
}) => {
  return (
    <div className={`notification-popup ${isOpen ? 'show' : ''}`}>
      <button className='close-button' onClick={onClose}>
        Fechar
      </button>
      {notifications.map(
        (
          notification: {
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined
            message:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  | string // Importe o arquivo de estilos
                  | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined
          },
          index: React.Key | null | undefined
        ) => (
          <div key={index} className='notification-item'>
            <div className='notification-title'>{notification.title}</div>
            <div className='notification-message'>{notification.message}</div>
          </div>
        )
      )}
    </div>
  )
}

export default NotificationPopup
