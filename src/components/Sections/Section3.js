import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <Box sx={{bgcolor: 'white', ml: 1, mr: 1, pt: 3, pl: 2, pr: 2, pb: 3}}>
      <Typography variant='h6' sx={{color: 'black', fontSize: '22px'}}>Sign in for your best experience</Typography>
      <Link to='/login'>
        <Button variant='contained' sx={{textDecoration: 'none', color: 'black', textTransform: 'capitalize', fontWeight: '400', fontSize: '14px', mt: 2, mb: -1, bgcolor: '#ffd810', width: '100%'}}>Sign in Securely</Button>
      </Link>
    </Box>
  )
}

export default Section3
