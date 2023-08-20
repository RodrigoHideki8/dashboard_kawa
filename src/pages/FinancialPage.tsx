import React, { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
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
  { id: 1, month: 'Jan', received: 2000, expenses: 800 },
  { id: 2, month: 'Feb', received: 1500, expenses: 1000 },
  { id: 3, month: 'Mar', received: 1800, expenses: 1200 }
]

const FinancialPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedTransactionIndex, setSelectedTransactionIndex] = useState(-1)

  const totalReceived = data.reduce((total, entry) => total + entry.received, 0)
  const totalExpenses = data.reduce((total, entry) => total + entry.expenses, 0)
  const balance = totalReceived - totalExpenses
  const futureBalance = 0
  const handleOpenDialog = (index: number) => {
    setSelectedTransactionIndex(index)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setSelectedTransactionIndex(-1)
    setDialogOpen(false)
  }
  return (
    <div className='financial-container-content'>
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
        <div className='transactions-details'>
          <Typography variant='h6'>Detalhes das Transações</Typography>
          {data.map((transaction, index) => (
            <div key={transaction.id} className='transaction-card'>
              <CardContent>
                <Typography>
                  Mês: {transaction.month} - Recebido: R${' '}
                  {transaction.received.toFixed(2)} - Despesa: R${' '}
                  {transaction.expenses.toFixed(2)}
                </Typography>
                <Button onClick={() => handleOpenDialog(index)}>
                  Detalhes
                </Button>
              </CardContent>
            </div>
          ))}
        </div>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Detalhes da Transação</DialogTitle>
          <DialogContent>
            {selectedTransactionIndex !== -1 && (
              <Typography>
                Mês: {data[selectedTransactionIndex].month} <br />
                Recebido: R${' '}
                {data[selectedTransactionIndex].received.toFixed(2)} <br />
                Despesa: R$ {data[selectedTransactionIndex].expenses.toFixed(2)}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Fechar</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  )
}

export default FinancialPage
