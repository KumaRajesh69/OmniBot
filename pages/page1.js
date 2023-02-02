import { Box, Button, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';
import { GpsFixed } from '@mui/icons-material';
import Login from '../src/components/Login';

function page1() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Grid container spacing={2}>
        {
          matches && 
           <Grid item xs={12} md={6} sm={12} >
          
            <img src='/Right_vector.svg' style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover'
            }} />
         
        </Grid>
        }
       
        <Grid item xs={12} md={6} sm={12}>
          <Login />
        </Grid>
      </Grid>
    </Box>
  )
}

export default page1