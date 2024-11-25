import './CapybaraCard.css'

function CapybaraCard(props) {
    return ( 
        <div className="capybara-card-div">
            <h2>Capybara name</h2>
            <img src="../../images/capybara-react-web.jpg" alt="" />
            <p>Una capybara muy bela</p>

            <ul className='capybara-list-information'>
                <li>Weight: {props.weight}</li>
                <li>Age: {props.age}</li>
                <li>Category: {props.category}</li>
            </ul>
        </div>
    );
}

export default CapybaraCard;