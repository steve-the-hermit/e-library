import React from 'react';

function Genre() {
  return (
    <div className="App">
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
          <span>Popular Genres</span>
        </div>
      </div>
    </div>
  );
}

export default Genre;
