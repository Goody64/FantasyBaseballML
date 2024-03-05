// Function to process stats based on the type
export function processStats(data, statType) {

    if (data === null || data === undefined) {
        return []; // Return an empty array or any other default value as appropriate
      }

    switch (statType) {
        case 'pitchType':
            return processPitchTypeStats(data);
        default:
            return [];
}


// Specific function for processing pitchType stats
function processPitchTypeStats(data) {
    // Check if data is null or undefined before proceeding
    if (!data) {
      return []; // Return an empty array to handle null/undefined data safely
    }
  
    // Assuming data is an object with pitchTypes as keys
    const processedData = Object.entries(data).map(([pitchType, speed]) => {
      return {
        key: pitchType,
        display: `${pitchTypeExpanded(pitchType)}: ${speed.toFixed(2)}`, // Format the string as needed
      };
    });
  
    return processedData;
  }

// Function to expand pitch type codes into full names (assuming this exists from your initial question)
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
}