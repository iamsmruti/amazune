import { Toolbar, Typography, Box, Badge } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system'
import React from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import indianFlag from '../../../assets/indianFlag.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 1,
      top: 10,
      border: `2px solid black`,
      padding: '0 4px',
    },
}));

const RightToolbar = () => {
  return (
    <Toolbar sx={{color: 'white'}}>
        <Box sx={{mt: 0.3}}>
            <img style={{height: '20px', marginRight: '1rem'}} src={indianFlag} />
        </Box>
        <Stack sx={{ml: 2, mr: 4}}>
            <Typography sx={{fontWeight: 400, color: 'lightgray', fontSize: '12px'}}>Hello, Sign in</Typography>
            <Typography sx={{fontWeight: 500, color: 'white', fontSize: '14px'}}>Accounts & Lists <span><ArrowDropDownIcon sx={{position:'absolute',mt: 0}}/></span></Typography>
        </Stack>
        <Stack sx={{ml: 2, mr: 4}}>
            <Typography sx={{fontWeight: 400, color: 'lightgray', fontSize: '12px'}}>Returns</Typography>
            <Typography sx={{fontWeight: 500, color: 'white', fontSize: '14px'}}>& Orders</Typography>
        </Stack>

        <Stack>
            <Box sx={{mr: {md:3, xs: 0}}}>
                <StyledBadge badgeContent={4} color="primary">
                    <ShoppingCartIcon fontSize="large" sx={{color: 'white'}}/>
                </StyledBadge>
                <Typography sx={{fontWeight: 500, color: 'white', fontSize: '14px', position: 'absolute', mt: -2.5, ml: 4}}>cart</Typography>
            </Box>
        </Stack>
    </Toolbar>
  )
}

export default RightToolbar
