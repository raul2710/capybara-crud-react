import './CapybaraAdd.css'

import React, { Component } from 'react';
import axios from 'axios';

class CapybaraAdd extends Component {

    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
    event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <section className='add-capybara-section'>
                <form onSubmit={this.handleSubmit} className="form-add-capybara">
                    <title>Add your own capybara</title>
                    <h2>Add your own capybara</h2>

                    <label htmlFor="">Name: </label>
                    <input type="text" about='texet' placeholder='Type the name' title='Teste' onChange={this.handleChange}/>
                    
                    <label htmlFor="">Curiosity: </label>
                    <textarea name="" id="" placeholder="Type about your capybara"></textarea>

                    <label htmlFor="">Age: </label>
                    <input name="" id="" placeholder="Type about your capybara"></input>

                    <button type="submit"> Add</button>
                    <button>Cancel</button>
                </form>
            </section>
        );
    }
}

export default CapybaraAdd;