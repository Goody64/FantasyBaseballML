// Asynchronous function to fetch player stats
export async function fetchPlayerStats(playerName, statType) {
    try {
        // Assuming statType is used to construct the URL or the request in some manner
        const response = await fetch(`http://localhost:8000/api/player_stats?player_name=${playerName}&stat_type=${statType}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error("Failed to fetch player stats:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}
