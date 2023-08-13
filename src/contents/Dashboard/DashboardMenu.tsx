import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import PeopleIcon from '@mui/icons-material/People'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const DashboardMenu: React.FC = () => {
  return (
    <div className='dashboard-menu'>
      <div className='dashboard-profile'>
        <AccountCircleIcon
          color='primary'
          fontSize='large'
          className='profile-icon'
        />
        <ListItemText primary='Nome do Usuário' className='profile-text' />
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to='/dashboard'>
          <ListItemIcon>
            <HomeIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/projects'>
          <ListItemIcon>
            <WorkIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary='Projetos' />
        </ListItem>
        <ListItem button component={Link} to='/products'>
          <ListItemIcon>
            <ShoppingBasketIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary='Produtos' />
        </ListItem>
        <ListItem button component={Link} to='/clients'>
          <ListItemIcon>
            <PeopleIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary='Clientes' />
        </ListItem>
        <ListItem button component={Link} to='/financial'>
          <ListItemIcon>
            <MonetizationOnIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary='Financeiro' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to='/profile'>
          <ListItemIcon>
            <AccountCircleIcon color='primary' fontSize='large' />
          </ListItemIcon>
          <ListItemText primary='Perfil de Usuário' />
        </ListItem>
      </List>
    </div>
  )
}

export default DashboardMenu
