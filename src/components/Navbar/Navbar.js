// MUI Imports
import { AppBar, Box, Grid } from '@mui/material'

// Atoms Imports
import LeftToolbar from './atoms/LeftToolbar'
import RightToolbar from './atoms/RightToolbar'
import SearchToolbar from './atoms/SearchToolbar'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(query == '') navigate('/')
    else navigate('/search-results')
  }, [query]);

  return (
    <Box>
      <AppBar sx={{bgcolor: 'black', display: 'flex', flexDirection: 'row', width: '100%'}}>
        <Grid container>
            <Grid item md={3}>
                <LeftToolbar />
            </Grid>
            <Grid item md={5}>
                <SearchToolbar setQuery={setQuery}/>
            </Grid>
            <Grid item md={4}>
                <RightToolbar />
            </Grid>
        </Grid>
      </AppBar>
    </Box>
  )
}

export default Navbar
