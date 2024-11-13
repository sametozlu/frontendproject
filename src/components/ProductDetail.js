import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const products = await fetchProducts();
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
    };
    getProduct();
  }, [id]);

  if (!product) return <div className="loading">Ürün yükleniyor...</div>;

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img className="product-image" src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <h2 className="product-price">${product.price}</h2>
        <button className="buy-button">Satın Al</button>
      </div>
    </div>
  );
};

export default ProductDetail;
