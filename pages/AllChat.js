import { Box, Drawer, Stack, Table, TableBody, TableCell, Typography } from '@mui/material'
import React from 'react'
import Filter from '../src/components/Filter'
import MyDrawer from '../src/components/MyDrawer'

function AllChat() {
    return (
        <MyDrawer>
            <Stack>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography>
                        All Chats
                    </Typography>
                    <Filter />
                </Box>
                <Table>fvg
                    <TableBody>fzdgsdfgvb
                        <TableCell>
                           this is my table 
                        </TableCell>
                    </TableBody>
                </Table>
            </Stack>
        </MyDrawer>
    )
}

export default AllChat