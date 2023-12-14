'use client';
import { PokemonGrid } from '@/pokemons';
import { useAppSelector } from '@/store';

export function FavoritePokemons() {
  const favs = useAppSelector((state) => Object.values(state.pokemons));

  return <PokemonGrid pokemons={favs} />;
}
