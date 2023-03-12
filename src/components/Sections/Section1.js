import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = ({products}) => {
  return (
    <Box sx={{bgcolor: 'white', ml: 1, mr: 1, pt: 3, pl: 2, pr: 2, pb: 3, mb: 2}}>
      <Typography variant='h6' sx={{color: 'black', fontSize: '22px'}}>{products.title}</Typography>
      <Grid sx={{mt: '1px'}} container spacing={2}>
        {products.items.map((item) => (
            <Grid item md={6}>
              <img style={{width: '100%', marginBottom: '-0.5rem'}} src={item.image}/>
              <Typography variant='caption' sx={{}}>{item.name}</Typography>
            </Grid>
        ))}
      </Grid>
      <Link to='/'>
      <Button variant='link' sx={{textDecoration: 'none', color: '#94bac0', textTransform: 'capitalize', fontWeight: '400', fontSize: '14px', ml: -2, mt: 3.5, mb: -1}}>Shop Now</Button>
      </Link>
    </Box>
  )
}

export default Section1
