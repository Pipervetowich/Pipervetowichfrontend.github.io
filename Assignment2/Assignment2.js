const fetchBtn = document.getElementById('fetch-btn');
const pokemonContainer = document.getElementById('pokemon-container');

fetchBtn.addEventListener('click', async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs 1-898
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
});

function displayPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const types = pokemon.types.map(t => 
    `<span class="type" style="background-color:${getTypeColor(t.type.name)}">${t.type.name}</span>`
  ).join('');

  const stats = pokemon.stats.map(s => 
    `<div><strong>${s.stat.name.toUpperCase()}:</strong> ${s.base_stat}</div>`
  ).join('');

  card.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <div class="types">${types}</div>
    <div class="stats">${stats}</div>
  `;

  pokemonContainer.prepend(card);
}

// Function to assign colors to types
function getTypeColor(type) {
  const colors = {
    fire: '#FDDFDF', water: '#DEF3FD', grass: '#DEFDE0', electric: '#FCF7DE',
    ice: '#D0F0FD', fighting: '#E6E0D4', poison: '#f4c2c2', ground: '#f4e7da',
    flying: '#F5F5F5', psychic: '#EAEDA1', bug: '#F8D5A3', rock: '#d5d5d4',
    ghost: '#705898', dragon: '#97b3e6', dark: '#705848', steel: '#B8B8D0', fairy: '#FDB9E9',
    normal: '#F5F5F5'
  };
  return colors[type] || '#AAA';
}
