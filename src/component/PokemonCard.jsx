import React from 'react'

export default function PokemonCard(props) {
  return (
  <div className="pokemon-card">
  <div className='poke-details'>
      <h1 className="pokemon-name">{props.pokemonData.name.charAt(0).toUpperCase() + props.pokemonData.name.slice(1)}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {props.pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>
      <div className='poke-details-container'>
      <div className='poke-details-1'>
      <p className="pokemon-info">
          <span> Height:</span> {props.pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {props.pokemonData.weight}
        </p>
      </div>

      <div className='poke-details-2'>
      <p className="pokemon-info">
          <span> Speed:</span> {props.pokemonData.stats[5].base_stat}
        </p>
        <p className="pokemon-info">
          <span> Experience:</span> {props.pokemonData.base_experience}
        </p>
      </div>

      <div className='poke-details-3'>
      <p className="pokemon-info">
          <span> Attack:</span> {props.pokemonData.stats[1].base_stat}
        </p>
        <p className="pokemon-info">
          <span> Abilities:</span>  {props.pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 2)
              .join(", ")}
        </p>
      </div>
      </div>
      </div>
      
      <figure>
        <img
          src={props.pokemonData.sprites.other.dream_world.front_default}
          alt={props.pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      
    </div>
    
  )
}
