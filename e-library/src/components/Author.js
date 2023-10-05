import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <p>Popular Authors</p>
      {cardImages.map((imageUrl, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img className="imgtag" src={imageUrl} alt="" />
            <div>
              <span className='followers'>Readers: {followCounts[index]}</span>
            </div>
          </div>
        </div>
      ))}
      <div className='Authors'>
        <p>Explore</p>
      </div>
    </div>
  );
}

export default Author;
