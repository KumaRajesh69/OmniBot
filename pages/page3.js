import { Box, Button, Grid,  Stack, TextField, Typography } from '@mui/material'
import React from 'react'




function page1() {


    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}  >

                    <Box sx={{
                        // backgroundPosition: 'center',
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
                            padding:11,
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            justifyContent:'center'
                        }}>
                            <Box>
                                <img src='/Logo.svg' /></Box>
                            <Box sx={{ marginTop: 8, width: '70%' }}>
                                <Typography variant='h6' sx={{ color: 'blue', fontWeight: 200 }}>
                                    Verify OTP
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: '#818181', }}     >
                                    Please enter the OTP that has been sent to your associated
                                    Email ID : demo****@gmail.com
                                </Typography>
                            </Box>
                            <Stack sx={{ width: 400 }}>
                                <Box sx={{ marginTop: 3 }}>
                                    <Typography variant='body2' sx={{ color: '#07003B' }}>
                                        Enter OTP
                                    </Typography>
                         <Stack display='flex' flexDirection='row' justifyContent='space-between'  spacing='2'>
                                    <TextField
                                        variant='outlined'
                                        lable="username"
                                        type='text'
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            
                                            background: '#FFFFFF',
                                            border: '1px solid #E7E7E7',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '6px'
                                        }} fullWidth />

                                    <TextField
                                        variant='outlined'
                                        lable="username"
                                        type='text'
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            
                                           
                               
                                         
                                            border: '1px solid #E7E7E7',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '6px'
                                        }} fullWidth />

                                    <TextField
                                        variant='outlined'
                                        lable="username"
                                        type='text'
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            background: '#FFFFFF',
                                            border: '1px solid #E7E7E7',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '6px'
                                        }} fullWidth />

                                    <TextField
                                        variant='outlined'
                                        lable="username"
                                        type='text'
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            background: '#FFFFFF',
                                            border: '1px solid #E7E7E7',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '6px'
                                        }} fullWidth />
                                        </Stack>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    marginTop:3
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