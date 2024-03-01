import React from 'react';
import './Home.css'; // Make sure the path matches your CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Fantasy Baseball Player Predictor</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Look up a current MLB player"
        />
      </div>
    </div>
  );
}

export default Home;
