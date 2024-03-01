import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playerStats, setPlayerStats] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    try {
      const response = await fetch(`http://localhost:8000/api/player_stats?player_name=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlayerStats(data);
    } catch (error) {
      console.log(error);
    }
  };
    function pitchTypeExpanded(pitchType) {
      switch(pitchType) {
        case 'AB': return 'Automatic Ball';
        case 'AS': return 'Automatic Strike';
        case 'CH': return 'Change-up';
        case 'CU': return 'Curveball';
        case 'EP': return 'Eephus';
        case 'FC': return 'Cutter';
        case 'FF': return 'Four-Seam Fastball';
        case 'FO': return 'Forkball';
        case 'FS': return 'Splitter';
        case 'FT':
        case 'SI': return 'Two-Seam Fastball / Sinker';
        case 'GY': return 'Gyroball';
        case 'IN': return 'Intentional Ball';
        case 'KC': return 'Knuckle Curve';
        case 'KN': return 'Knuckleball';
        case 'NP': return 'No Pitch';
        case 'PO': return 'Pitchout';
        case 'SC': return 'Screwball';
        case 'SL': return 'Slider';
        case 'UN': return 'Unknown';
        default: return 'Unknown Pitch Type';
      }
    }
  
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
      </form>
      {playerStats && (
        <div>
          {Object.entries(playerStats).map(([pitchType, speed]) => (
            <div key={pitchType}>{`${pitchTypeExpanded(pitchType)}: ${speed.toFixed(2)}`}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
