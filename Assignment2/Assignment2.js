// Get button and container
const fetchBtn = document.getElementById("fetch-btn");
const container = document.getElementById("pokemon-container");

// When button is clicked
fetchBtn.addEventListener("click", async () => {
  // Pick random Pokémon ID
  const randomId = Math.floor(Math.random() * 898) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  // Fetch data
  const response = await fetch(url);
  const data = await response.json();

  // Create a card with Pokémon name + image
  container.innerHTML = `
    <div class="pokemon-card">
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
    </div>
  `;
});