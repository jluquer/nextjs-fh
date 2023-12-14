'use client';
import Image from 'next/image';
import Link from 'next/link';

import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import { SimplePokemon } from '..';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemon/pokemonSlice';

interface Props {
  pokemon: SimplePokemon;
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className='right-0 mx-auto mt-2 w-60'>
      <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
        {/* Card body */}
        <div className='border-b bg-gray-800 p-6 text-center'>
          <div className='flex justify-center'>
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={name}
              priority={false}
            />
          </div>
          <p className='pt-2 text-lg font-semibold capitalize text-gray-50'>
            {pokemon.name}
          </p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='rounded-full border px-4 py-2 text-xs font-semibold text-gray-100'
            >
              Más información
            </Link>
          </div>
        </div>

        {/* Card footer */}
        <div className='border-b'>
          <button
            className='flex w-full items-center px-4 py-2 hover:bg-gray-100'
            onClick={onToggle}
          >
            <span className='text-red-600'>
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </span>
            <span className='flex flex-1 flex-col flex-nowrap items-start pl-3'>
              <span className='text-sm font-medium leading-none text-gray-800'>
                {isFavorite ? 'Favorito' : 'Marcar como favorito'}
              </span>
              <span className='text-xs text-gray-500'>Click para cambiar</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
