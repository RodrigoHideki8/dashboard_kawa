import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/LoginPage.css'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (email === 'usuario@teste.com' && password === 'senha123') {
      navigate('/dashboard')
    } else {
      setError('E-mail ou senha inválidos.')
    }
  }

  return (
    <Container maxWidth='xs' className='login-container'>
      <div className='login-content'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/3/3f/%E5%B7%9D-order.gif'
          alt='Imagem'
          className='login-image'
        />

        <Typography variant='h4' gutterBottom className='login-heading'>
          Bem-vindo a Kawa Tech 川
        </Typography>
        <TextField
          label='E-mail'
          variant='outlined'
          fullWidth
          margin='normal'
          className='login-field'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label='Senha'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
          className='login-field'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            className='register-button'
          >
            Registrar-se
          </Button>
        </Link>

        {error && (
          <Typography
            color='error'
            align='center'
            style={{ marginTop: '1rem' }}
          >
            {error}
          </Typography>
        )}

        {/* Informações adicionais */}
        <Typography
          variant='body2'
          align='center'
          style={{ marginTop: '1rem', color: '#fff' }}
        >
          Email para contato do suporte: suporte@kawatech.com.br
        </Typography>
        <Typography
          variant='body2'
          align='center'
          style={{ marginTop: '0.5rem', color: '#fff' }}
        >
          Data de início do projeto: 03/08/2023
        </Typography>
      </div>
    </Container>
  )
}

export default LoginPage
