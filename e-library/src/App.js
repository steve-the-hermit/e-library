import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Author from './components/Author';
import Book from './components/Book'; 
import Genre from './components/Genre'; 
import Home from './components/Home';

function App() {
  return (
    <Router>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
