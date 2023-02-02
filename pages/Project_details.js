import { Box, Button, Divider, Grid, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditProject from '../src/components/EditProject';
import React from 'react'
import MyDrawer from '../src/components/MyDrawer'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
function Project_details() {
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <MyDrawer>
            <Grid container spacing={2}>
                <Stack sx={{
                    bgcolor: 'blue', width: '100%',
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
                        <Box sx={{ mt: 2, ml: 2 }}>
                            <img src='/blue_icon.svg' />
                        </Box>
                        <Box sx={{ ml: 4, mt: 2 }}>
                            <Typography variant='body2' sx={{ color: '#F3F4F8' }}>
                                Omnibot v2.0
                            </Typography>
                            <Typography variant='body2'>
                                <Link href="#" underline="none" sx={{ color: '#F3F4F8' }}>
                                    https://www.omnibot.com/v2
                                </Link>
                            </Typography>
                        </Box>
                      
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                
                                <EditProject />
                            </Box>
                       
                    </Box>
                </Stack>
                <Stack sx={{ bgcolor: '#E5E5E5', display: 'flex', flexDirection: 'row', width: '100%',height:'100vh' }}>
                    <Grid container spacing={2}
                    >
                        <Grid item xs={7} md={7}
                        >
                            <Grid container spacing={1}
                            >
                                <Grid item xs={4} md={4} >
                                    <Box sx={{
                                        mt: 2, ml: 1, bgcolor: '#FFFFFF', ml: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        borderTop: '8px solid #3BB956',
                                        width: 200,
                                        height: 94,
                                        borderRadius: 2
                                    }}>
                                        <Typography variant='body1' sx={{ color: '3BB956' }}>
                                            Ongoing Chat
                                        </Typography>
                                        <Typography variant='h5' sx={{ color: 'black' }} >
                                            246
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Box sx={{
                                        mt: 2, ml: 1,
                                        display: 'flex', bgcolor: '#FFFFFF', ml: 2,
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        borderTop: '8px solid #FE556F',
                                        width: 200,
                                        height: 94,
                                        borderRadius: 2
                                    }}>
                                        <Typography variant='body1' sx={{ color: '#FE556F' }}>
                                            Ongoing Chat
                                        </Typography>
                                        <Typography variant='h5' sx={{ color: 'black' }}>
                                            246
                                        </Typography></Box>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Box sx={{
                                        mt: 2, ml: 1, ml: 2,
                                        display: 'flex', bgcolor: '#FFFFFF',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        borderTop: '8px solid #6C63FF',
                                        width: 200,
                                        height: 94,
                                        borderRadius: 2
                                    }}>
                                        <Typography variant='body1' sx={{ color: 'FFFFFF' }}>
                                            Ongoing Chat
                                        </Typography>
                                        <Typography variant='h5' sx={{ color: 'black' }}>
                                            246
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={12} xs={12} >
                                    <Box sx={{
                                        mt: 2, ml: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderTop: '9px solid #3C50E0',
                                        width: '98.2%',
                                        height: 620,
                                        borderRadius: 2
                                    }}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Dessert (100g serving)</TableCell>
                                                        <TableCell align="right">Calories</TableCell>
                                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.calories}</TableCell>
                                                            <TableCell align="right">{row.fat}</TableCell>
                                                            <TableCell align="right">{row.carbs}</TableCell>
                                                            <TableCell align="right">{row.protein}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Box>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Box sx={{
                                mt: 2, mr: 2,
                                display: 'flex', bgcolor: '#FFFFFF',
                                flexDirection: 'column',
                                borderTop: '9px solid #3C50E0',
                                width: 446,
                                height: 480,
                                borderRadius: 2
                            }}>
                                <Box sx={{ width: '100%', bgcolor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', px: 2, py: 3 }}>
                                    <Typography>
                                        chatbot Script
                                    </Typography>
                                    <ContentCopyIcon />
                                </Box>
                                <Divider sx={{ bgcolor: ' blue', }} />
                                <Box sx={{ width: '100%', }}>
                                    <Typography variant='body2'>

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </MyDrawer>
    )
}

export default Project_details









