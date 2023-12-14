import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const storageKey = 'favorite-pokemons';
interface PokemonState {
  [key: string]: SimplePokemon;
}

function getInitialState(): PokemonState {
  return JSON.parse(localStorage.getItem(storageKey) ?? '{}');
}

const initialState: PokemonState = getInitialState();

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite(state, { payload: pokemon }: PayloadAction<SimplePokemon>) {
      const { id } = pokemon;
      if (state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }
      localStorage.setItem(storageKey, JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
