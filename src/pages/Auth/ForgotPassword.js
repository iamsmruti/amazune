import React from 'react'

import { Box, Button, Stack, TextField, Typography, Link } from '@mui/material'

import logo from '../../assets/items/UNE.png'

import {Link as RLink} from 'react-router-dom'

const ForgotPassword = () => {
  const handleSubmit = () => {

  }
  return (
    <Box>
      <Stack>
        <img style={{width: '120px', marginLeft: 'auto', marginRight: 'auto'}} src={logo}/>
      </Stack>

        <Box sx={{border: '1px solid lightgrey', p: 4, width: 'fit-content', ml: 'auto', mr: 'auto', borderRadius: '5px', mb: 4}}>
          <Typography sx={{fontSize: '24px'}}>Password assistance</Typography>
          <Typography sx={{width: 330, fontSize: '12px'}}>Enter the email address or mobile phone number associated with your Amazon account.</Typography>
          <Typography variant='body2' sx={{mt: 2}}>Email or mobile phone number</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column'}} component={'form'} onSubmit={handleSubmit}>
            <TextField sx={{width: 330}}/>
            <Button type='submit' variant='contained' sx={{mt: 2, textTransform: 'capitalize'}}>Continue</Button>
          </Box>
        </Box>
    </Box>
  )
}

export default ForgotPassword
