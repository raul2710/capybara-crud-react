import React, { Component } from 'react';
import axios from 'axios';
import CapybaraCard from '../CapybaraCard/CapybaraCard';
import './CapybaraListCard.css'

class CapybaraListCard extends Component {
   
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }
    
    render() {
        return (
            <div>
                <h2>All capybaras</h2>
                
                <div className='carousel'>
                    <CapybaraCard />
                    <CapybaraCard />
                    <CapybaraCard />
                </div>
            </div>
        );
    }
}

export default CapybaraListCard;
