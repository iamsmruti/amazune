import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
  return (
    <Box>
      <div className='footer-gradient'></div>

      <Stack justifyContent={'center'} direction={'row'} className='footer' sx={{color: 'blue'}}>
        <Link to='/'>Conditions of Use</Link>
        <Link to='/'>Provacy Notice</Link>
        <Link to='/'>Help</Link>
      </Stack>

      <Typography align='center' sx={{fontSize: '10px', mt: 2, ml : -1}}>© 1996-2022, Amazon.com, Inc. or its affiliates</Typography>
    </Box>
  )
}

export default Footer2
