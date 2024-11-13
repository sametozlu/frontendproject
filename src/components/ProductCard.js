import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/product/${product.id}`}
        >
          Detaylar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
