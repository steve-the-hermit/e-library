import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Book.css';

function Book() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBook, setNewBook] = useState({
    book_title: '', // Ensure that 'book_title' matches the backend field name
    book_publication_year: '',
    book_image_url: '',
    book_author_id: '', // Corrected field name
    book_genre_id: '', // Corrected field name
  });

  // Function to fetch books from the backend
  const fetchBooks = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:5000/books');
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = books.filter((book) =>
      book.book_title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  const handleResetClick = () => {
    setSearchQuery('');
    setFilteredBooks(books);
  };

  const handleAddBook = async () => {
    // Check if required fields are empty
    if (
      !newBook.book_title ||
      !newBook.book_publication_year ||
      !newBook.book_image_url ||
      !newBook.book_author_id ||
      !newBook.book_genre_id
    ) {
      console.error('Validation failed: All fields are required.');
      return;
    }

    try {
      const response = await Axios.post('http://127.0.0.1:5000/books', {
        book_title: newBook.book_title, // Ensure that 'book_title' matches the backend field name
        book_publication_year: newBook.book_publication_year,
        book_image_url: newBook.book_image_url,
        book_author_id: newBook.book_author_id, // Corrected field name
        book_genre_id: newBook.book_genre_id, // Corrected field name
      });
      console.log('Book added successfully:', response.data);

      // Refresh the book list after adding a book
      fetchBooks();

      // Clear the form fields
      setNewBook({
        book_title: '',
        book_publication_year: '',
        book_image_url: '',
        book_author_id: '',
        book_genre_id: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);

      // Log the error response for debugging
      console.log('Error response:', error.response);
    }
  };

  const handleNewBookInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await Axios.delete(`http://127.0.0.1:5000/books/${bookId}`);
      console.log('Book deleted successfully');
      // Refresh the book list after deletion
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  
  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Search Books"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <button className="reset" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </div>
      <h2>Our Collection</h2>
      <div className="books">
        {filteredBooks.map((book) => (
          <div className="book-info" key={book.id}>
            <div>
              <img src={book.book_image_url} alt={book.book_title} />
            </div>
            <h3>{book.book_title}</h3>
            <h3>{book.book_publication_year}</h3>
            <button className="book-btn" onClick={() => handleDeleteBook(book.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <h2>Add New Book</h2>
      <div className="add-book-form">
        <input
          type="text"
          name="book_title"
          placeholder="Title"
          value={newBook.book_title}
          onChange={handleNewBookInputChange}
        />
        <input
          type="text"
          name="book_publication_year"
          placeholder="Publication Year"
          value={newBook.book_publication_year}
          onChange={handleNewBookInputChange}
        />
        <input
          type="text"
          name="book_image_url"
          placeholder="Image URL"
          value={newBook.book_image_url}
          onChange={handleNewBookInputChange}
        />
        <input
          type="text"
          name="book_author_id"
          placeholder="Author ID"
          value={newBook.book_author_id}
          onChange={handleNewBookInputChange}
        />
        <input
          type="text"
          name="book_genre_id"
          placeholder="Genre ID"
          value={newBook.book_genre_id}
          onChange={handleNewBookInputChange}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
}

export default Book;
