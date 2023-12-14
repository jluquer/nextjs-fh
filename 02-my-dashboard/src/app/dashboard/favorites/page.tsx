import { FavoritePokemons } from '@/pokemons';

export const metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
};

export default function PokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='my-2 text-5xl'>
        Pokémons favoritos <small className='text-blue-500'>Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
