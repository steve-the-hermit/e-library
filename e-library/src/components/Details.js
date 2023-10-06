import React from 'react';
import { useParams } from 'react-router-dom'; 

function Detail() {
  const { authorId } = useParams();

  return (
    <div>
      <p>Author Name</p>
      <p>Author ID: {authorId}</p>
      <span className='about'>About Author</span>
    </div>
  );
}

export default Detail;
