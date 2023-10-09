import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Genre.css';

function Genre() {
  const [genres, setGenres] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newGenre, setNewGenre] = useState({
    genre_name: '',
  });

  const fetchGenres = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:5000/genres');
      setGenres(response.data);
      setFilteredGenres(response.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = genres.filter((genre) =>
      genre.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredGenres(filtered);
  };

  const handleResetClick = () => {
    setSearchQuery('');
    setFilteredGenres(genres);
  };

  const handleAddGenre = async () => {
    try {
      if (!newGenre.genre_name) {
        console.error('Validation failed: Genre name is required.');
        return;
      }

      const response = await Axios.post('http://127.0.0.1:5000/genres', {
        genre_name: newGenre.genre_name,
      });

      fetchGenres();

      setNewGenre({
        genre_name: '',
      });
    } catch (error) {
      console.error('Error adding genre:', error);
    }
  };

  const handleDeleteGenre = async (genreId) => {
    try {
      await Axios.delete(`http://127.0.0.1:5000/genres/${genreId}`);
      fetchGenres();
    } catch (error) {
      console.error('Error deleting genre:', error);
    }
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Search Genre"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <button className="reset" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </div>
      <h2>Popular Genres</h2>
      <div className="genres">
        {filteredGenres.map((genre) => (
          <div className="genre-info" key={genre.id}>
            <h3>{genre.name}</h3>
            <button className='genre-btn' onClick={() => handleDeleteGenre(genre.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h2>Add New Genre</h2>
      <div className="add-genre-form">
        <input
          type="text"
          name="genre_name"
          placeholder="Genre Name"
          value={newGenre.genre_name}
          onChange={(e) => setNewGenre({ ...newGenre, genre_name: e.target.value })}
        />
        <button onClick={handleAddGenre}>Add Genre</button>
      </div>
    </div>
  );
}

export default Genre;
