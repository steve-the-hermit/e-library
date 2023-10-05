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

  return (
    <div>
      <p>Trending Authors</p>
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
