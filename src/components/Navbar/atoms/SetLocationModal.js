import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const SetLocationModal = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <Box sx={{width: 350 }}>
                <Typography sx={{fontWeight: 600, p: 3, bgcolor: 'lightgray'}}>Choose your Location</Typography>
                <Box sx={{p: 3}}>
                    <Typography sx={{fontSize: '10px'}}>Select a delivery location to see product availability and delivery options</Typography>
                    <Link to='/login'>
                        <Button onClick={handleClose} fullWidth variant='contained' sx={{textTransform: 'capitalize', mt: 2}}>Sign in to see your address</Button>
                    </Link>
                    <Typography align='center' sx={{color: 'gray', fontSize: '12px', mt: 2}}>Or enter an Indian pincode</Typography>
                    <Stack direction={'row'} sx={{mt: 2}}>
                        <TextField fullWidth/>
                        <Button variant='outlined' sx={{color: 'black', border: '1px solid black', ml: 1}}>Apply</Button>
                    </Stack>
                </Box>
            </Box>
        </Dialog>
    )
}

export default SetLocationModal
