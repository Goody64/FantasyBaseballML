// Function to process stats based on the type
export function processStats(data, statType) {

    if (data === null || data === undefined) {
        return []; // Return an empty array or any other default value as appropriate
      }
    const [_, stattype] = statType.split(':')
    switch (stattype) {
        case 'pitch_type':
            return processPitchTypeStats(data);
        default:
            return [];
}


// Specific function for processing pitchType stats
function processPitchTypeStats(data) {
    if (!data) {
      return ({
        key: 'hello',
        display: 'this is wrong',
      });
    }

    const processedData = Object.entries(data).map(([pitchType, speed]) => {
      return {
        key: pitchType,
        display: `${pitchTypeExpanded(pitchType)}: ${speed.toFixed(2)}`, // Format the string as needed
      };
    });
  
    return processedData;
  }

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