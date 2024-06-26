import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

async function getPokemons(limit = 20, offset = 0): Promise<SimplePokemon[]> {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokémons <small className='text-blue-500'>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
