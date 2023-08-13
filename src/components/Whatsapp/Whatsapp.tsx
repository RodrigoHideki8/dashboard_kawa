import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import '../../styles/WhatsappButton.css'

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = process.env.REACT_APP_NOME_DA_VARIAVEL
    const message = 'Olá! Estou interessado em conversar com você.'

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappLink, '_blank');
  }

  return (
    <div className='whatsapp-button' onClick={handleWhatsAppButtonClick}>
      <WhatsAppIcon fontSize='large' />
    </div>
  )
}
export default WhatsAppButton
