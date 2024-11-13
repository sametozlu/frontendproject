import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => 
      selectedCategory ? product.category === selectedCategory : true
    );

  if (loading) {
    return <div className="loading">Ürünler yükleniyor...</div>;
  }

  return (
    <div className="product-list">
      <FilterBar onFilterChange={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
