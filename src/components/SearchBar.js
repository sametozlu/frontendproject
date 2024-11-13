import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // onSearch fonksiyonu burada çağrılıyor
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Ürün ara..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
