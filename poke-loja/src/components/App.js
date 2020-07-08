import React, { Component } from 'react'
import TablePokemons from './TablePokemons'
import Form from './Form'
import PokeDex from './PokeDex'

class App extends React.Component {
    state = {
        pokemons: []
    }

    removePokemons = (index) =>{
        const {pokemons} = this.state

        this.setState({
            pokemons: pokemons.filter((pokemon, i) => {
                return i !== index
            })
        })
    }
    
    handleSubmit = (pokemon) => {
        this.setState({pokemons: [...this.state.pokemons, pokemon]})
    }

    render () {
        const heading = <h1 className="site-heading">Poke Loja</h1>
        const {pokemons} = this.state
            return(
                <div className="App">
                    {heading}
                    <TablePokemons pokemonsData = {pokemons} removePokemons={ this.removePokemons }/>
                    <Form handleSubmit={this.handleSubmit}/>
                    <PokeDex handleSubmit={this.handleSubmit}/>
                </div>


            )
    }
  }

export default App