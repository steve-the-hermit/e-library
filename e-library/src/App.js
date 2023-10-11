import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Route from 'react-router-dom'
import Axios from 'axios';
import Author from './components/Author';
import Book from './components/Book';
import Genre from './components/Genre';
import Home from './components/Home';
import Detail from './components/Details';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <Link to="/" className='title'>BookHub</Link>
      <nav className='navbar'>
        <ul>
          <li>
            <Link activeClassName="active-link" to="/book">Book</Link>
          </li>
          <li>
            <Link activeClassName="active-link" to="/genre">Genre</Link>
          </li>
          <li>
            <Link activeClassName="active-link" to="/author">Author</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/author" element={<Author />} />
        <Route path="/author/:authorId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
