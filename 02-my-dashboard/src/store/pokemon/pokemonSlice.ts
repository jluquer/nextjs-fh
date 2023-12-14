import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
  '1': { id: '1', name: 'Bulbasaur' },
  '3': { id: '3', name: 'Venasaur' },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite(state, { payload: pokemon }: PayloadAction<SimplePokemon>) {
      const { id } = pokemon;
      if (state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
