import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavoritePokemons {
  [key: string]: SimplePokemon;
}

interface PokemonState {
  favorites: FavoritePokemons;
}

function getInitialState(): PokemonState {
  return JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
}

const initialState: PokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite(state, { payload: pokemon }: PayloadAction<SimplePokemon>) {
      const { id } = pokemon;
      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
      localStorage.setItem(
        'favorite-pokemons',
        JSON.stringify(state.favorites),
      );
    },
    setFavoritePokemons(state, { payload }: PayloadAction<FavoritePokemons>) {
      state.favorites = payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
