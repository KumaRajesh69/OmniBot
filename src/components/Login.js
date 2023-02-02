import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <Stack style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Box sx={{
          padding:11,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center'
        }}>
          <Box>
            <img src='/Logo.svg'  /></Box>
          <Box sx={{marginTop:10}}>
            <Typography variant='h6' sx={{ color: 'blue' }}>
              Login
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#818181' }}     >
              Sign in to your account
            </Typography>
          </Box>

          <Box sx={{ marginTop: 3 }}>
            <Typography variant='subtitle2'>
              Email ID
            </Typography>
          
            <TextField
              variant='outlined'
              type='text'
              sx={{ mb: 2 }}
              fullWidth 
            />
             <Typography variant='subtitle2'>
              Password
            </Typography>
              <TextField
              variant='outlined'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>,
              }}
              sx={{ marginBottom: 2 }}
              fullWidth 
            />
          </Box>

          <Stack  style={{ marginTop:33 }}> 
            <Button variant='contained'
              bgcolor='3C50E0' sx={{padding:2,font:'Rubik',fontStyle:'normal'}}
             >
              Sign In
            </Button>

            <Link href="#" underline="hover" style={{textAlign:'right',marginTop:10}}>
              Forgot Password?
            </Link>
          </Stack>
        </Box>
      </Stack>
  )
}

export default Login