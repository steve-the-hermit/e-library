import React from 'react';

function Home() {
  return (
    <div className="App">
    <div className="Home">
        <h2 className='welcome'>Welcome on bestselling ebooks library</h2>
        <img className='img'src='https://shorturl.at/doyTW' alt='altc' />
    </div>
    <div className='Home'>
        <img className='img1' src='https://t.ly/22A6b' alt='altc'/>
        <h2 className='welcome'>Read the biggest ebooks for 100% free.
        <p>Each day you'll receive a selection of titles, from bestsellers to hidden gems.</p>
        </h2>
    </div>
    <div className='Home'>
        <h2 className='welcome'>Discover personalized ebook deals.
        <p>Tell BookHub what you like to read, and get handpicked deals that match your reading taste.</p>
        </h2>
        <img className='img2' src='https://shorturl.at/bdlyT' alt='altc'/>
    </div>
    <div className='Home'>
        <h2 className='join' >Join millions of happy readers.</h2>
    </div>
    <div className='Home'>
        <img className='img3'src='https://shorturl.at/bvyOU' alt='atlc'/>
    </div>
    <div className='Home'>
        <div className='text-container'>
            <p className='text'>"I would tell anyone to just sign up without reservation. I now have more books"
            <p className='textname'>by: Drake Ntimama</p></p>
            <p className='text'>"Without hesitation, I'd recommend anyone to join; my book collection now exceeds"
            <p className='textname'>by: Steve Macharia</p></p>
            <p className='text'>"I actually download several books a week... I would say I’ve saved alot BookHub."
            <p className='textname'>by: Richard Kimani</p></p>
            <p className='text'>"There are series I would have never discovered if it weren’t for BookHub."
            <p className='textname'>by: Collins Wakahenya</p></p>
        </div>
    </div>
    </div>
  );
}

export default Home;
