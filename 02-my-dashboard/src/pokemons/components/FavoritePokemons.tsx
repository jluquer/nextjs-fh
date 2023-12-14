'use client';
import { PokemonGrid } from '@/pokemons';
import { useAppSelector } from '@/store';
import { IoHeartDislikeOutline } from 'react-icons/io5';

export function FavoritePokemons() {
  const favorites = useAppSelector((state) => Object.values(state.pokemons));

  return favorites.length ? (
    <PokemonGrid pokemons={favorites} />
  ) : (
    <NoFavorites />
  );
}

function NoFavorites() {
  return (
    <div className='flex h-[50vh] flex-col items-center justify-center'>
      <IoHeartDislikeOutline
        size={150}
        className='text-red-500'
      />
      <span className='text-3xl font-extrabold'>No hay favoritos</span>
    </div>
  );
}
