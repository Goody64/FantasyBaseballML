import React, { useState } from 'react';
import './Home.css';
import { fetchPlayerStats } from './searchService';
import { processStats } from './statsProcessor';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playerStats, setPlayerStats] = useState(null);
  const [statType, setStatType] = useState('');
  const [searchFeedback, setSearchFeedback] = useState(null);
  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
      event.preventDefault(); // Prevent page reload on form submission
      try {
          const data = await fetchPlayerStats(searchTerm, statType);
          setPlayerStats(data);
          setSearchFeedback(false); 
      } catch (error) {
          console.log(error);
          setSearchFeedback(true);
      }
  };

  return (
    <div className="home-container">
    <h1>Fantasy Baseball Player Predictor</h1>
    <form className="search-container" onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Look up a current MLB player"
            value={searchTerm}
            onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
        <select value={statType} onChange={(e) => setStatType(e.target.value)}>
          <option value="">Select Statistic Type</option>
          <option value="pitching:pitch_type">Average Speed by Pitch</option>
          <option value="pitching:spin_rate">Spin Rate</option>
          <option value="batting:average">Batting Average</option>
        </select>

    </form>
    {searchFeedback && <div className="search-feedback">Cannot find player</div>}
      {!searchFeedback && (
        <div>
          {playerStats && (
            <div>
              {processStats(playerStats, statType).map((item, index) => (
                <div key={index}>{item.display}</div> 
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
