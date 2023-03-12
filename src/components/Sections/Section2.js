import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

const Section2 = ({product}) => {
  return (
    <Box sx={{bgcolor: 'white', ml: 1, mr: 1, pt: 3, pl: 2, pr: 2, pb: 3}}>
      <Typography variant='h6' sx={{color: 'black', fontSize: '22px'}}>{product.title}</Typography>
        <img style={{width: '100%',marginTop: '1rem'}} src={product.image}/>
      <Link to={product.url}>
      <Button variant='link' sx={{textDecoration: 'none', color: '#94bac0', textTransform: 'capitalize', fontWeight: '400', fontSize: '14px', ml: -2, mt: 2, mb: -1}}>{product.urlName}</Button>
      </Link>
    </Box>
  )
}

export default Section2
