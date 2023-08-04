// Generic function to fetch data from an API using fetch
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  
  // Function to get all characters or a single character
  async function getCharacters(characterId = '') {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    const data = await fetchData(url);
    return data;
  }
  
  // Function to get all locations or a single location
  async function getLocations(locationId = '') {
    const url = `https://rickandmortyapi.com/api/location/${locationId}`;
    const data = await fetchData(url);
    return data;
  }
  
  // Function to get all episodes or a single episode
  async function getEpisodes(episodeId = '') {
    const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
    const data = await fetchData(url);
    return data;
  }
  
  // Function usages
  async function main() {
    try {
      // Call the character function to fetch all characters
      const allCharacters = await getCharacters();
      console.log('All Characters:', allCharacters);
  
      // Call the character function to get 3 individual characters
      const character1 = await getCharacters(1);
      console.log('Character 1:', character1);
  
      const character2 = await getCharacters(2);
      console.log('Character 2:', character2);
  
      const character3 = await getCharacters(3);
      console.log('Character 3:', character3);
  
      // Call the location function to fetch all locations
      const allLocations = await getLocations();
      console.log('All Locations:', allLocations);
  
      // Call the location function to get 3 individual locations
      const location1 = await getLocations(1);
      console.log('Location 1:', location1);
  
      const location2 = await getLocations(2);
      console.log('Location 2:', location2);
  
      const location3 = await getLocations(3);
      console.log('Location 3:', location3);
  
      // Call the episode function to fetch all episodes
      const allEpisodes = await getEpisodes();
      console.log('All Episodes:', allEpisodes);
  
      // Call the episode function to get 3 individual episodes
      const episode1 = await getEpisodes(1);
      console.log('Episode 1:', episode1);
  
      const episode2 = await getEpisodes(2);
      console.log('Episode 2:', episode2);
  
      const episode3 = await getEpisodes(3);
      console.log('Episode 3:', episode3);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  main();
  