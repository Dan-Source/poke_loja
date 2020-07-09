import React from 'react'


const PokeCard = ({pokemon, handlePokemonShopCart}) => {
    return (
      <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name.toUpperCase()}</b></div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">#{pokemon.id}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">$ {pokemon.weight},00</h6>
          <img src={pokemon.sprites['front_default']} />
          <img src={pokemon.sprites['back_default']} />
          <button type="button" className="btn btn-secondary btn-block" key="add-button" id="add-button" onClick={() => handlePokemonShopCart(pokemon)}>Add</button>                    
        </div>
      </div>
    )
};

export default PokeCard