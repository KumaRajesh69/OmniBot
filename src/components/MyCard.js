import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'


function MyCard({color}) {
    return (

        <Card sx={{
            bgcolor: color,
            boxShadow: ' 0px 12.4302px 22.948px rgba(60, 80, 224, 0.25)',
            borderRadius: 3,
            display: 'flex', flexDirection: 'row',
            width: '100%',
            height: 130
        }}>
            <Box sx={{ padding: 2, mt: 2 }}>
                <img src={'/blue_icon.svg'}
                    style={{ width: 60, height: 60, mt: 2 }} />
            </Box>
            <Box
                padding={1}
                display='flex'
                justifyContent='center'
                flexDirection='column'
                
            >
                <Typography variant='h6' sx={{
                    color: '#FFFFFF'
                }}>
                    Omnibot v2.0
                </Typography>
                <Typography variant='caption' sx={{ color: '#FFFFFF' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Stack sx={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 1,
                    p: 0.5
                }}>
                    <Typography variant='body2' sx={{ color: '#FFFFFF', }}>
                        246 Chats
                    </Typography>
                </Stack>
            </Box>
        </Card>


    )
}

export default MyCard