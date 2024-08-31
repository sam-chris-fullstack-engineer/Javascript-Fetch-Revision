//fetch

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!res.ok) {
      throw new Error("Sorry Could not fetch data");
    }

    const data = await res.json();
    const PokemonSprite = data.sprites.front_default;
    const PokemonImage = document.getElementById("PokemonSprite");
    PokemonImage.src = PokemonSprite;
    PokemonImage.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
