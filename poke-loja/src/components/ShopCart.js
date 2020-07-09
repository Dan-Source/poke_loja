import React, { Component } from 'react'
import Header from './Header'


const HeadCart = () => {
  return(
      <div>
          <thead>
              <tr>
                  <th scope="col" >
                      Nome
                  </th>
                  <th scope="col">
                      Preço
                  </th>
              </tr>
          </thead>
      </div>
  )
}

const BodyCart = (props) => {
  const rows = props.pokemonsShopCart.map((pokemon, index)=> {
      return(
          <tr key = {index} scope="row">
              <td><img src={pokemon.sprites['front_default']} /></td>
              <td>{pokemon.name.toUpperCase()}</td>
              <td>$ {pokemon.weight},00</td>
              <td>
                  {/* <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={() => props.removePokemons(index)}>x</button> */}
              </td>
          </tr>
      )
  })
  return (
      <tbody>
        {rows}
        <td>TOTAL</td>
        <td>$ {1000},00</td>
      </tbody>
  )
  
}


class ShopCart extends Component{
    render(){      
        const {pokemonsShopCart, removePokemons} = this.props
        return(
          <>
            <table className="table table-hover table-dark">
                <HeadCart />
                <BodyCart
                    pokemonsShopCart={pokemonsShopCart} 
                    removePokemons={removePokemons}
                    // total={total}
                />
            </table>
            <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button"> Buy </button>
        </>
        )

    }
};

export default ShopCart