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

  const authors = [
    { name: 'Author 1', description: 'Author 1 description...' },
    { name: 'Author 2', description: 'Author 2 description...' },
    // Add more authors as needed
  ];

  return (
    
    <div>
      <p>Popular Authors</p>
      {images.map((imageUrl, index) => (
        <div className="card" key={index}>
          {/* <span>Authorname</span> */}
          <div className="img">
            <img  className="imgtag" src={imageUrl} alt="" />
            <button
              style={{
                backgroundColor: cardState[index] ? 'rgb(102, 30, 30)' : '#000',
                color: cardState[index] ? '#ffffff' : '#ffffff',
              }}
              onClick={() => toggleCardState(index)}
            >
              {cardState[index] ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Author;
