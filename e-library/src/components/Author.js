import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Author.css';

function formatDateWithoutGMT(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const formattedDate = `${year} ${month} ${day}`;
  return formattedDate;
}

function Author() {
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to fetch authors from the backend
  const fetchAuthors = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:5000/authors'); 
      setAuthors(response.data); 
      setFilteredAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = authors.filter((author) =>
      author.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredAuthors(filtered);
  };

  const handleResetClick = () => {
    setSearchQuery('');
    setFilteredAuthors(authors);
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Search Authors"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <button className="reset" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </div>
      <h2>Authors List</h2>
      <div className="authors">
        {filteredAuthors.map((author) => (
          <div className="author-info" key={author.id}>
            <h3>{author.name}</h3>
            <p>{formatDateWithoutGMT(author.birthdate)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
