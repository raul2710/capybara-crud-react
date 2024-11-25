
import React, { Component } from 'react';
import axios from 'axios';

class DeleteAddressById extends Component {
    state = {  } 

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
                    <title>Delete a capybara address by Id</title>

                    <h2>Delete a capybara address by Id</h2>

                    <label htmlFor="">Id: </label>
                    <input type="text" about='texet' placeholder='Type the name' title='Teste' onChange={this.handleChange}/>

                    <button type="submit"> Delete</button>
                    <button>Cancel</button>
                </form>

                <p>The capybara was delete</p>
            </section>

        );
    }
}
 
export default DeleteAddressById;