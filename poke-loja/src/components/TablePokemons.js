import React, { Component } from "react"
import {ReactComponent as Logo} from '../components/img/pokemon.svg'

const HeadTablePokemons = () => {
    return(
        <div>
            <h3> Carrinho </h3>
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

const BodyTablePokemons = (props) => {
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

class TablePokemons extends Component{
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

export default TablePokemons