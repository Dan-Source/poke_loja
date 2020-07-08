import React, { Component } from "react"
import {ReactComponent as Logo} from '../components/img/pokemon.svg'

const HeadCart = () => {
    return(
        <div>
            <h3> Poke Cart </h3>
            <thead>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>
            </thead>
        </div>
    )
}

const BodyCart = (props) => {
    const rows = props.pokemonsData.map((rows, index)=> {
        return(
            <tr key = {index}>
                <td>{rows.name}</td>
                <td>{rows.preco}</td>
                <td>
                    <button onClick={() => props.removePokemons(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class ShopCart extends Component{
    render () {
        const {pokemonsData, removePokemons} = this.props
        return(
            <table>
                <HeadTablePokemons />
                <BodyTablePokemons 
                    pokemonsData = {pokemonsData} 
                    removePokemons={removePokemons}
                />
            </table>
        )
    }
}

export default ShopCart