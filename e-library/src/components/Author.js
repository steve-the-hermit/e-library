import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Author() {
  const [followCounts, setFollowCounts] = useState(Array(6).fill(0));

  useEffect(() => {
    setFollowCounts([13962848, 2305940, 11594036, 4676549, 5290112, 6004934]); 

    const intervalId = setInterval(() => {
      setFollowCounts((prevCounts) =>
        prevCounts.map((count) => count + 3)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const cardImages = [
    'https://t.ly/AGkST',
    'https://shorturl.at/no168',
    'https://shorturl.at/cfQ69',
    'https://shorturl.at/glmMY',
    'https://shorturl.at/AIR58',
    'https://cfda.imgix.net/2022/12/Adonis-unnamed-8.jpg',
  ];
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResetClick = () => {
    setSearchQuery('');
  };

  return (
    
    <div>
      <p>Popular Authors</p>
      {cardImages.map((imageUrl, index) => (
        <div className="card" key={index}>
          <Link className='my-link' to={`/author/${index}`}>
            <div className="img">
              <img className="imgtag" src={imageUrl} alt="" />
              <div>
                <span className='followers'>Readers: {followCounts[index]}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className='Authors'>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Search Author"
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
        <p>Explore</p>
        {/* map author */}
      </div>
    </div>
  );
}

export default Author;
