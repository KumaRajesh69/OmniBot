import { Box, Button, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


function page1() {


    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}  >

                    <Box sx={{
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'fit',
                        height: '100vh'
                    }}>

                        <img src='/Right_vector.svg' style={{
                              width: '100%',
                              height: '100vh',
                              objectFit: 'cover'
                        }}></img>
                    </Box>

                </Grid>
                <Grid item xs={6} md={6} sm={12} >
                    <Stack style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Box sx={{
                            paddingTop:13,
                            paddingRight:9,
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center'
                        }}>
                            <Box>
                                <img src='/Logo.svg' /></Box>
                            <Box sx={{ marginTop: 10 }}>
                                <Typography variant='h6' sx={{ color: 'blue', fontWeight: 500 }}>
                                    Forgot Password
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: '#818181' }}     >
                                    Please enter your associated Email ID to continue
                                </Typography>
                            </Box>
                            <Stack sx={{ width: 400 }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <Typography variant='subtitle2' sx={{ color: '#808080' }}>
                                        Email ID
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        lable="username"
                                        type='text'
                                        sx={{
                                            marginBottom: 3, border: '1px solid #E7E7E7',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                                            borderadius: '6px'
                                        }} fullWidth />
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                    <Button variant='outlined'
                                        color='primary' fullWidth>
                                        Back
                                    </Button>
                                    <Button variant='contained'
                                        color='primary' fullWidth sx={{ ml: 2, height: 50, }}>
                                        Get OTP
                                    </Button>
                                </Box>

                            </Stack>

                        </Box>
                    </Stack>


                </Grid>
            </Grid>
        </Box>
    )
}

export default page1