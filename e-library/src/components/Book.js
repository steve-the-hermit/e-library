// edits

import React from 'react';

function Book() {
  return (
    <div className="App">
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
          {/* map the books */}
        </div>
    </div>
  );
}

export default Book;
