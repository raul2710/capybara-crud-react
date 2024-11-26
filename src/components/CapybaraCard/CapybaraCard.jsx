import './CapybaraCard.css'

function CapybaraCard(props) {
    return ( 
        <div className="capybara-card-div">
            <h2>Capybara name</h2>
            <img src="../../images/capybara-react-web.jpg" alt="" />
            <p>Una capybara muy bela</p>

            <ul className='capybara-list-information'>
                <li>Age: {props.age}</li>
                <li>Weight: {props.weight}</li>
                <li>Color: {props.color}</li>
                <li>Curiosity: {props.curiosity}</li>
                <li>Classification: {props.classification}</li>
            </ul>
        </div>
    );
}

export default CapybaraCard;