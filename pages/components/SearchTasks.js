import React, { useState } from 'react';

const SearchTasks = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    onSearch(searchValue); // Call the parent function to filter tasks
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        className="search-tasks"
        placeholder="Search your tasks"
        value={query}
        onChange={handleSearch} // Update search query
      />
    </div>
  );
};

export default SearchTasks;
