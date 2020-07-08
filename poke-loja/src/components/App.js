import React, { Component } from 'react'
import TablePokemons from './ShopCart'
import Form from './AddTable'
import PokeDex from './PokeDex'

class App extends React.Component {
    state = {
        pokemons: []
    }

    addPokemons = (index) => {
        const {pokemons} = this.state

        this.setState(
        )
    }

    removePokemons = (index) =>{
        const {pokemons} = this.state

        this.setState({
            pokemons: pokemons.filter((pokemon, i) => {
                return i !== index
            })
        })
    }
    

    render () {
        const heading = <h1 className="site-heading">Poke Loja</h1>
        const {pokemons} = this.state
            return(
                <div className="App">
                    {heading}
                    <TablePokemons pokemonsData = {pokemons} removePokemons={ this.removePokemons }/>
                    <PokeDex handleSubmit={this.handleSubmit}/>
                </div>


            )
    }
  }

export default App