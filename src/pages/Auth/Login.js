import React from 'react'

import { Box, Button, Stack, TextField, Typography, Link } from '@mui/material'

import logo from '../../assets/items/UNE.png'

import {Link as RLink} from 'react-router-dom'

const Login = () => {
  const handleSubmit = () => {

  }
  return (
    <Box>
      <Stack>
        <img style={{width: '120px', marginLeft: 'auto', marginRight: 'auto'}} src={logo}/>
      </Stack>

        <Box sx={{border: '1px solid lightgrey', p: 4, width: 'fit-content', ml: 'auto', mr: 'auto', borderRadius: '5px', mb: 4}}>
          <Typography sx={{fontSize: '24px'}}>Sign-In</Typography>
          <Typography variant='body2' sx={{mt: 2}}>Email or mobile phone number</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column'}} component={'form'} onSubmit={handleSubmit}>
            <TextField sx={{width: 330}}/>
            <Button type='submit' variant='contained' sx={{mt: 2, textTransform: 'capitalize'}}>Continue</Button>
          </Box>

          <Box sx={{width: 330}}>
            <Typography sx={{fontSize: '12px', mt: 3}}>By continuing, you agree to Amazon's <Link sx={{color: '#1865b2'}} to='/'>Conditions of Use</Link> and <Link sx={{color: '#1865b2'}} to='/'>Privacy Notice</Link></Typography>
          </Box>

          <Box sx={{width: 330}}>
            <Typography sx={{fontSize: '12px', mt: 3}}><RLink to='/forgot-password'><Link sx={{color: '#1865b2'}}>Forgot Password</Link></RLink></Typography>
          </Box>
        </Box>

        <Stack sx={{mb: 3}} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography align='center' sx={{color: 'gray', fontSize: '12px'}}>New to Amazon?</Typography>
            <Button to='/create-account' sx={{bgcolor: 'lightgrey', fontSize: '12px', textTransform: 'capitalize', width: 400, mt: 2}} variant='contained'><RLink to='/create-account'><Link sx={{color: 'black'}}>Create an Account</Link></RLink></Button>
        </Stack>
    </Box>
  )
}

export default Login
