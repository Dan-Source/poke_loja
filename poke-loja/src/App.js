import React, { Component } from 'react'
import TablePokemons from './TablePokemons'

class App extends React.Component {
    render () {
        const pokemons = [
            {
                name: 'Charmander',
                preco: '$ 60.00',
            },
            {
                name: 'Charmander',
                preco: '$ 60.00',
            },
            {
                name: 'Charmander',
                preco: '$ 60.00',
            }
            
          ]
        const heading = <h1 className="site-heading">Poke Loja</h1>
            return(
                <div className="App">
                    {heading}
                    <TablePokemons pokemonsData = {pokemons}/>
                </div>
            )
    }
  }

export default App