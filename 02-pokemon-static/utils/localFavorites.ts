const pokemons = (): number[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

const toggleFavorite = (id: number) => {
  console.log("toggle fav");
  let favorites = pokemons();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => id !== pokeId);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorite = (id: number): boolean => {
  return pokemons().includes(id);
};

const localFavorites = {
  toggleFavorite,
  existInFavorite,
  pokemons,
};

export default localFavorites;
