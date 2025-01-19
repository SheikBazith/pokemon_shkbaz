import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import pokeLogo from '../images/Pokédex_logo.png'
import pokeBtn from '../images/poke-btn.png'

export default function PokemonDetails() {

    const pokeAPI = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=20";
    
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);


    async function fetchPokemonAPI(){
        try{
            const res = await fetch(pokeAPI);
            const data = await res.json();

            const fetchPokemonData = data.results.map(async (ele) => {
                const res = await fetch(ele.url);
                const data = await res.json();
                console.log(data);
                return data;
            })

            const fetchPokemonPromise = await Promise.all(fetchPokemonData); 
            setPokemon(fetchPokemonPromise);

            
            setLoading(false);
            }

            catch(error){
                console.error(error);
                setLoading(false);
                setError(error);
            }
    }

    useEffect(() => {
        fetchPokemonAPI();
    },[])

    const filterPokemon = pokemon.filter((ele) => 
        ele.name.toLowerCase().includes(searchPokemon.toLowerCase()));

    filterPokemon.map((ele) => (ele.types.map((ele) => 
    <h1>{ele.type.name}</h1>)));

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const currentPost =  filterPokemon.slice(firstPostIndex, lastPostIndex);
  

    if(loading){
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    if(error){
        return <div>
            <h1>{error.message}</h1>
        </div>
    }

    function searchPoke(){
        
    }


  return (
    <div>
        <div className='top-level'>
        <img className='poke-logo' src={pokeLogo}/>
        <div className='poke-search'>
        <input type='text' placeholder='Search Pokemon' value={searchPokemon} onChange={(e) => {
            setSearchPokemon(e.target.value);
            setCurrentPage(1);
        }}/>
        <button className='poke-btn' onClick={searchPoke}><img src={pokeBtn}/></button>
        </div>
       
        </div>
        <div className='container'>
        {currentPost.map((ele) => 
            <PokemonCard pokemonData={ele}/>
        )}
        </div>
        <Pagination totalPosts={filterPokemon.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />

    </div>
  )
}
