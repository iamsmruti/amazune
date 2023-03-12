import { Toolbar, Box, Typography, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link } from 'react-router-dom'

import { useState } from 'react';

import logo from '../../../assets/amazune.png'

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

import SetLocationModal from './SetLocationModal';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const LeftToolbar = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('clicked')
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Toolbar>
            <Link to='/'>
                <img style={{ height: '50px', marginLeft: '1rem', marginTop: '5px', marginRight: '1rem' }} src={logo} />
            </Link>

            <Box onClick={handleClickOpen} sx={{ ml: 1, display: 'flex', cursor: 'pointer' }}>
                <LocationOnIcon sx={{ color: 'white', mt: 'auto', mb: 1 }} />
                <Stack>
                    <Typography sx={{ fontWeight: 400, color: 'lightgray', fontSize: '12px' }}>Hello</Typography>
                    <Typography sx={{ fontWeight: 500, color: 'white', fontSize: '14px' }}>Select your address</Typography>
                </Stack>
            </Box>

            <SetLocationModal
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </Toolbar>
    )
}

export default LeftToolbar
