import './AddressCard.css'

function AddressCard(props) {
    return ( 
        <div className="capybara-card-div">
            <h2>Address Id: {props.id}</h2>

            <ul className='capybara-list-information'>
                <li>City: {props.city}</li>
                <li>State: {props.state}</li>
                <li>Lake Name: {props.lake_name}</li>
                <li>Capybara Id: {props.capybara_id}</li>
            </ul>
            {/* <h3>Address</h3>
            <ul className='capybara-list-information'>
                <li>City: {props.city}</li>
                <li>State: {props.state}</li>
                <li>Lake Name: {props.lake_name}</li>
            </ul> */}
        </div>
    );
}

export default AddressCard;