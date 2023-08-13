import React from 'react'
import { Container, Typography, Grid, Card, CardContent } from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import '../styles/FinancialPage.css' 
import DashboardMenu from '../contents/Dashboard/DashboardMenu'

const data = [
  { month: 'Jan', received: 2000, expenses: 800 },
  { month: 'Feb', received: 1500, expenses: 1000 },
  { month: 'Mar', received: 1800, expenses: 1200 }
]

const FinancialPage: React.FC = () => {
  const totalReceived = data.reduce((total, entry) => total + entry.received, 0)
  const totalExpenses = data.reduce((total, entry) => total + entry.expenses, 0)
  const balance = totalReceived - totalExpenses
  const futureBalance = 0

  return (
    <>
      <DashboardMenu />
      <Container className='financial-container'>
        <Typography variant='h4' className='financial-heading'>
          Movimentações
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Saldo Disponível
                </Typography>
                <Typography
                  variant='h4'
                  color={balance >= 0 ? 'primary' : 'error'}
                >
                  R$ {balance.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Lançamentos Futuros
                </Typography>
                <Typography
                  variant='h4'
                  color={futureBalance >= 0 ? 'primary' : 'error'}
                >
                  R$ {totalExpenses.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Saldo Devedor
                </Typography>
                <Typography variant='h4' color='error'>
                  R$ {Math.abs(balance).toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className='chart-container'>
          <LineChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='received'
              stroke='#8884d8'
              name='Valores Recebidos'
            />
            <Line
              type='monotone'
              dataKey='expenses'
              stroke='#82ca9d'
              name='Despesas'
            />
          </LineChart>
        </div>
      </Container>
    </>
  )
}

export default FinancialPage
