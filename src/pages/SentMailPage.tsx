import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

interface SentMailPageProps {
  location: {
    state: {
      name: string
      email: string
    }
  }
}

const SentMailPage: React.FC<SentMailPageProps> = ({ location }) => {
  const history = useHistory()

  const handleResendEmail = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/sent-mail`
      await axios.post(apiUrl, {
        email: location.state.email,
        name: location.state.name
      })

      alert('Email de confirmação reenviado com sucesso!')
    } catch (error) {
      console.error('Erro ao reenviar o email:', error)
      alert('Ocorreu um erro ao reenviar o email de confirmação.')
    }
  }

  return (
    <>
      <div>
        <h2>Email de Confirmação Enviado!</h2>
        <p>Um email de confirmação foi enviado para o seu endereço de email.</p>
        <p>
          Por favor, verifique a sua caixa de entrada e siga as instruções para
          confirmar o seu email.
        </p>
      </div>
      <Button variant='outlined' color='primary' onClick={handleResendEmail}>
        Reenviar Email
      </Button>
    </>
  )
}

export default SentMailPage
