import React from 'react'
import { Box, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';

const customStyle = {
  color: 'white',
  mr: 2,
  fontSize: '13px'
}

const SubNavbar = () => {
  const [drawer, setDrawer] = useState(false)

  const Sidebar = (
    <Box
      sx={{ width: '350px' }}
      role="presentation"
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <Box sx={{ bgcolor: '#242f3f', p: 1, display: 'flex', pl: 4 }}>
        <AccountCircleIcon sx={{ color: 'white', fontSize: '30px' }} />
        <Typography variant='h6' sx={{ color: 'white', ml: 1 }}>Hello, Sign in</Typography>
      </Box>
      <Box sx={{ overflowY: 'scroll' }}>
        <List>
          <Typography sx={{ fontWeight: 600, fontSize: '18px', ml: 4, mt: 1 }}>Trending</Typography>
          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -0.3 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Best Sellers</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>New Releases</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2, mb: -1 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Movers & Shakers</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <List>
          <Typography sx={{ fontWeight: 600, fontSize: '18px', ml: 4, mt: 1 }}>Digital Content & Devices</Typography>
          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -0.3 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Echo & Alexa</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Fire TV</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Kindle E-Readers & eBooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Audible Audiobooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Video</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2, mb: -1 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Music</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          <Typography sx={{ fontWeight: 600, fontSize: '18px', ml: 4, mt: 1 }}>Digital Content & Devices</Typography>
          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -0.3 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Echo & Alexa</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Fire TV</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Kindle E-Readers & eBooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Audible Audiobooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Video</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2, mb: -1 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Music</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          <Typography sx={{ fontWeight: 600, fontSize: '18px', ml: 4, mt: 1 }}>Digital Content & Devices</Typography>
          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -0.3 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Echo & Alexa</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Fire TV</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Kindle E-Readers & eBooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Audible Audiobooks</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Video</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2, mb: -1 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Amazon Prime Music</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <List>
          <Typography sx={{ fontWeight: 600, fontSize: '18px', ml: 4, mt: 1 }}>Help & Settings</Typography>
          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -0.3 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Your Account</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText sx={{ mt: -2 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Customer Service</Typography></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Link to='/login'>
                <ListItemText sx={{ mt: -2, mb: -1 }}><Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Sign In</Typography></ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )

  return (
    <>
      <Box sx={{ bgcolor: '#242f3f', p: 0.5, color: 'white', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => setDrawer(true)}>
          <MenuIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: 'white', fontSize: '13px' }}>All</Typography>
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Best Sellers</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Today's Deal</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Mobiles</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Customer Service</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Books</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Electronics</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Prime</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Fashion</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>New Release</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Home & Kitchen</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Amazon Pay</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Computers</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Coupons</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Toys & Games</Typography>
          </Link>

          <Link to='/best-sellers'>
            <Typography sx={customStyle}>Sell</Typography>
          </Link>
        </Box>
      </Box>
      <Drawer
        anchor={'left'}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        {Sidebar}
      </Drawer>
    </>
  )
}

export default SubNavbar
