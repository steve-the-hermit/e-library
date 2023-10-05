import React,{useState} from 'react';

function Genre() {
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
          placeholder="Search Genre"
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
          <div className="color" style={{ background: 'url(https://rb.gy/dpcwv) center/cover' }}>
            <span>MYSTERY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/pGWXY) center/cover' }}>
            <span>FANTASY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/cghjv) center/cover' }}>
            <span>ROMANCE</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/hyCJ1) center/cover' }}>
            <span>DETECTIVE</span>
          </div>
          <div className="color" style={{ background: 'url(https://rb.gy/cbcia) center/cover' }}>
            <span>THRILLER</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/jAGMN) center/cover' }}>
            <span>SPY</span>
          </div>
          <div className="color" style={{ background: 'url(https://shorturl.at/guGQT) center/cover' }}>
            <span>GRAPHICS</span>
          </div>
        </div>
        <div id="stats">
          <p>Popular Genres</p>
        </div>
      </div>
      <div className='genres'>
  <p>See More</p>
  {genres.map((genre, index) => (
    <div className="genre-info" key={index}>
      <h3>{genre}</h3>
      <p>Additional information about the genre or links to explore it further.</p>
    </div>
  ))}
</div>

      <div className='genres'>
  <p>See More</p>
  {genres.map((genre, index) => (
    <div className="genre-info" key={index}>
      <h3>{genre}</h3>
      <p>Additional information about the genre or links to explore it further.</p>
    </div>
  ))}
</div>

      <div className='genres'>
  <p>See More</p>
  {genres.map((genre, index) => (
    <div className="genre-info" key={index}>
      <h3>{genre}</h3>
      <p>Additional information about the genre or links to explore it further.</p>
    </div>
  ))}
</div>

      <div className='genres'>
  <p>See More</p>
  {genres.map((genre, index) => (
    <div className="genre-info" key={index}>
      <h3>{genre}</h3>
      <p>Additional information about the genre or links to explore it further.</p>
    </div>
  ))}
</div>

    </div>
  );
}

export default Genre;
