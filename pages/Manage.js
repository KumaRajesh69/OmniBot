import React from 'react'
import MyDrawer from '../src/components/MyDrawer';

import MyCard from '../src/components/MyCard';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function Manage() {

    function ResponsiveAppBar() {
        const array = ["#3C50E0", "#FE556F", '#F08D19', '#27B045', '#8C7DE9', '#6CA821'];
        return (
            <MyDrawer>
                <Grid container spacing={3}>
                    {
                        array.map((each, pos) => (
                            <Grid item sm={6} md={3} xs={12}>
                                <MyCard color={each} />
                            </Grid>
                        ))
                    }
                </Grid>
            </MyDrawer>
        )

    }
    return ResponsiveAppBar();
}
export default Manage