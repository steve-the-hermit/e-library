import React, { useState } from 'react';

function Author() {
  const [cardState, setCardState] = useState(Array(6).fill(false));

  const toggleCardState = (index) => {
    const updatedCardState = [...cardState];
    updatedCardState[index] = !updatedCardState[index];
    setCardState(updatedCardState);
  };

  const images = [
    'https://t.ly/AGkST',
    'https://shorturl.at/no168',
    'https://shorturl.at/cfQ69',
    'https://shorturl.at/glmMY',
    'https://shorturl.at/AIR58',
    'https://cfda.imgix.net/2022/12/Adonis-unnamed-8.jpg',
  ];

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
        {authors.map((author, index) => (
          <div className="author-info" key={index}>
            <h3>{author.name}</h3>
            <p>{author.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
