import React, { Component } from 'react';
import axios from 'axios';
import CapybaraCard from '../CapybaraCard/CapybaraCard';

class AddressSearchById extends Component {

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
                    <title>Search your capybara by ID</title>
                    
                    <h2>Search a capybara address by Id</h2>

                    <label htmlFor="">Id: </label>
                    <input type="text" about='texet' placeholder='Type the name' title='Teste' onChange={this.handleChange}/>

                    <button type="submit"> Search </button>
                    <button> Cancel </button>

                    <CapybaraCard />

                </form>
            </section>
        );
    }
}

export default AddressSearchById;