import React, { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Pagination
} from '@mui/material'
import { PhotoLibrary } from '@mui/icons-material'
import '../styles/ProductsPage.css'
import DashboardMenu from '../contents/Dashboard/DashboardMenu'

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const photoUrls = Array.from(
    { length: 50 },
    (_, index) => `https://via.placeholder.com/150?text=Photo${index + 1}`
  )

  const totalItems = photoUrls.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPhotos = photoUrls.slice(startIndex, endIndex)

  const handlePageChange = (
    _event: any,
    value: React.SetStateAction<number>
  ) => {
    setCurrentPage(value)
  }

  return (
    <div className='photo-gallery-container'>
      <DashboardMenu />
      <Container className='photo-gallery-content'>
        <Typography variant='h4' gutterBottom className='futuristic-heading'>
          Produtos
        </Typography>
        <Grid container spacing={2}>
          {currentPhotos.map((url, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper elevation={3} className='photo-thumbnail'>
                <img src={url} alt={`Photo ${index + 1}`} />
                <div className='photo-overlay'>
                  <IconButton>
                    <PhotoLibrary fontSize='large' />
                  </IconButton>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Pagination
          className='pagination'
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Container>
    </div>
  )
}

export default ProductsPage
