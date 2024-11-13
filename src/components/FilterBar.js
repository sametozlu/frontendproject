import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-bar">
      <select onChange={handleCategoryChange}>
        <option value="">Tüm Kategoriler</option>
        <option value="smartphones">Akıllı Telefonlar</option>
        <option value="laptops">Laptoplar</option>
        <option value="fragrances">Parfümler</option>
        <option value="skincare">Cilt Bakımı</option>
      </select>
    </div>
  );
};

export default FilterBar;
