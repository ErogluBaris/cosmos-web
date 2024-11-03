import React from 'react';
import ProductCard from '../component/ProductCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

export default function Product() {
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={12}>
                    {Array.from(Array(12)).map((_, index) => (
                    <Grid xs={6} sm={4} md={3} key={index}>
                        <ProductCard />
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        
    )
}

