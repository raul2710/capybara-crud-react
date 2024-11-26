function CapybaraCard(props) {
    return ( 
        <div className="capybara-card-div">
            <h2>{props.name}</h2>
            <p>{props.curiosity}</p>

            <ul className='capybara-list-information'>
                <li>Age: {props.age}</li>
                <li>Weight: {props.weight}</li>
                <li>Color: {props.color}</li>
                <li>Classification: {props.classification}</li>
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

export default CapybaraCard;