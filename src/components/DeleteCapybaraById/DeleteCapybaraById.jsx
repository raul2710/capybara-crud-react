
import React, { Component } from 'react';
// import axios from 'axios';

class DeleteCapybaraById extends Component {
    state = {  } 


    render() { 
        return (
            <section className='add-capybara-section'>
                <form onSubmit={this.handleSubmit} className="form-add-capybara">
                    <title>Delete your capybara by Id</title>

                    <h2>Delete your capybara by Id</h2>

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
 
export default DeleteCapybaraById;