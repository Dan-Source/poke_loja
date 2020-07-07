import React, {Component} from 'react'

class Form extends Component {
    initailState = {
        name: '',
        preco: '',
    }

    state = this.initailState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
                [name]: value,
            })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initailState)
    }
    render(){
        const {name, preco}  = this.state;

        return(
            <form>
                <label htmlFor='name'>
                    Nome:
                </label>
                <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}/>

                <label htmlFor='name'>
                    Preço:
                </label>
                <input 
                type="text"
                name="preco"
                id="preco"
                value={preco}
                onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form