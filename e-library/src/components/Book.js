// edits

import React,{useState} from 'react';


function Book() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResetClick = () => {
    setSearchQuery('');
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="container">
        <div className="palette">
          <div className="color" style={{ background: 'url(https://shorturl.at/cCEJ8) center/cover' }}>
            <span>MYSTERY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/dfBNU) center/cover' }}>
            <span>FANTASY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/ehiHZ) center/cover' }}>
            <span>ROMANCE</span>
          </div>
          <div className="color" style={{ background: 'url(https://rb.gy/rqjcl) center/cover' }}>
            <span>DETECTIVE</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/elFWZ) center/cover' }}>
            <span>THRILLER</span>
          </div>
          <div className="color" style={{ background: 'url(https://rb.gy/8kt95) center/cover' }}>
            <span>SPY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/goCLV) center/cover' }}>
            <span>GRAPHICS</span>
          </div>
        </div>
        <div id="stats">
          <p>Best Selling</p>
        </div>
      </div>
      <div className='books'>
  <p>Our Collection</p>
  {books.map((book, index) => (
    <div className="book-info" key={index}>
      <h3>{book.title}</h3>
      <p>Book description, author information, or other relevant details go here.</p>
    </div>
  ))}
</div>



    </div>
  );
}

export default Book;
