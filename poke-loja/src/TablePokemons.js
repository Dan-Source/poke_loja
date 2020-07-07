import React, { Component } from "react"

const HeadTablePokemons = () => {
    return(
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
    )
}

const BodyTablePokemons = (props) => {
    const rows = props.pokemonsData.map((rows, index)=> {
        return(
            <tr key = {index}>
                <td>{rows.name}</td>
                <td>{rows.preco}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class TablePokemons extends Component{
    render () {
        const {pokemonsData} = this.props
        return(
            <table>
                <HeadTablePokemons />
                <BodyTablePokemons pokemonsData = {pokemonsData}/>
            </table>
        )
    }
}

export default TablePokemons