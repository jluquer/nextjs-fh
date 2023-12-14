import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit';

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState = {};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
