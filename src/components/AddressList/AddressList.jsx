import { Component } from "react";
import CapybaraCard from "../CapybaraCard/CapybaraCard";

class AddressList extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>All Address</h2>
                
                <div className='carousel'>
                    <CapybaraCard />
                    <CapybaraCard />
                    <CapybaraCard />
                </div>
            </div>
        );
    }
}
 
export default AddressList;