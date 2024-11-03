import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProductCard() {
  return (
    <Card sx={{boxShadow: 'none !important', border: 'none !important' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://ideacdn.net/idea/dz/51/myassets/products/593/99cac725-90b9-47b1-8cd2-24bef97ed5e5.jpeg?revision=1727160013"
          alt="scrubs"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            New York
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Açık Mavi Erkek Üniforma
          </Typography>
          <Typography>
            1.800,00 TL
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}