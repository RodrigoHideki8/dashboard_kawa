import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import '../styles/RegisterPage.css'
import { formatCPF, formatPhoneNumber, isValidCPF } from '../utils/validation'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(event.target.value)
    setCpf(formattedCPF)
  }
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(event.target.value)
    setPhone(formattedPhone)
  }

  const handleRegister = async () => {
    const newErrors = {
      name: !name.includes(' ') ? 'Digite seu nome completo.' : '',
      email: !validator.isEmail(email) ? 'Digite um email válido.' : '',
      cpf: !isValidCPF(cpf) ? 'Digite um CPF válido.' : '',
      phone: !validator.isMobilePhone(phone, 'any', { strictMode: false })
        ? 'Digite um número de telefone válido (com DDD e apenas números).'
        : '',
      password:
        password.length < 6 || !/\W/.test(password)
          ? 'A senha deve conter no mínimo 6 caracteres e um caracter especial.'
          : '',
      confirmPassword:
        password !== confirmPassword ? 'As senhas não correspondem.' : ''
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/sent-mail`
      await axios.post(apiUrl, {
        email: email,
        name: name
      })
    } catch (error) {
      console.log(error)
    }
    navigate('/sent-mail', { state: { name: name, email: email } })
  }

  return (
    <Container maxWidth='xs' className='register-container'>
      <div className='register-content'>
        <Typography variant='h4' gutterBottom className='register-heading'>
          Cadastro
        </Typography>
        <TextField
          label='Nome'
          variant='outlined'
          fullWidth
          margin='normal'
          className='register-field'
          value={name}
          onChange={e => setName(e.target.value)}
          error={errors.name !== ''}
          helperText={errors.name}
        />
        <TextField
          label='E-mail'
          variant='outlined'
          fullWidth
          margin='normal'
          className='register-field'
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email !== ''}
          helperText={errors.email}
        />
        <TextField
          label='CPF'
          variant='outlined'
          fullWidth
          margin='normal'
          className='register-field'
          value={cpf}
          onChange={handleCPFChange}
          error={errors.cpf !== ''}
          helperText={errors.cpf}
        />
        <TextField
          label='Telefone Celular'
          variant='outlined'
          fullWidth
          margin='normal'
          className='register-field'
          value={phone}
          onChange={handlePhoneChange}
          error={errors.phone !== ''}
          helperText={errors.phone}
        />
        <TextField
          label='Senha'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
          className='register-field'
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={errors.password !== ''}
          helperText={errors.password}
        />
        <TextField
          label='Confirmar Senha'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
          className='register-field'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword !== ''}
          helperText={errors.confirmPassword}
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleRegister}
        >
          Cadastrar
        </Button>
      </div>
    </Container>
  )
}

export default RegisterPage
