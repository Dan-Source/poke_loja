import React, {Component} from 'react';
import PokeCard from './PokeCard'
import Header from './Header'
import ShopCart from './ShopCart'


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            pokemons: [],
            pokemonDetails: [],
            pokemonsShopCart: [],
            total: 0.0,
            
        }

        this.handlePokemonShopCart = this.handlePokemonShopCart.bind(this)
    }

    componentDidMount(){
        this.getMorePokemon();
    }

    getMorePokemon() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({pokemons : data.results}, () => {
              this.state.pokemons.map(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    var temp = this.state.pokemonDetails
                    temp.push(data)
                    this.setState({pokemonDetails: temp})
                  }            
                })
                .catch(console.log)
              })
            })        
          }
        })
        .catch(console.log)
      }

      handlePokemonShopCart = (pokemon) => {
          const pokemonsShopCartState = this.state.pokemonsShopCart
          pokemonsShopCartState.push(pokemon)
          this.setState((state) => {
              console.log(pokemon)
              return {pokemonsShopCart: pokemonsShopCartState}
                });
          console.log(pokemonsShopCartState)
      }
      // handleBuy = (pokemonsShopCart) => {
      //   const pokemonsShopCartState = this.state.pokemonsShopCart
      //   const totalState = this.state.total
      //   let soma = 0
      //   pokemonsShopCartState.map((pokemon, index) => {
      //     soma = soma + pokemon.weight.parseInt()
      //   })
      //   totalState = soma
      //   console.log(totalState)
      //   this.setState((state) => {
      //     return {total: totalState}
      //   })
      // }

      render() {
        const {pokemonDetails} = this.state;
    
        const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
          return (<PokeCard pokemon={pokemon} handlePokemonShopCart={this.handlePokemonShopCart} />);
        });

        
    
        return (
            <>
                <div className="Container">
                  <Header/>
                
                <div className="row">
                  <div className="col-sm-4">
                  <ShopCart pokemonsShopCart={this.state.pokemonsShopCart}/>
                  </div>
               
                <div className="col-sm-8">
                    <div className="card-columns">
                        {renderedPokemonList}
                    </div>
                  <button type="button" className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
                </div>
              </div>
            </div>
            </>
        );
      }
}

export default App;