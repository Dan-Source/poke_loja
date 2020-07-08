import React, {Component} from 'react'

class AddTable extends Component {
    render(){
        const {pokemon}  = this.props;
        return(
            <div>
                <button onClick={() => props.addPokemons(index)}>Delete</button>
            </div>
        )
    }
}

export default AddTable