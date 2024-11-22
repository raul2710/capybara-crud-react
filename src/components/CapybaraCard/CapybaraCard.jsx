import './CapybaraCard.css'

function CapybaraCard() {
    return ( 
        <div className="capybara-card-div">
            <h2>Capybara name</h2>
            <img src="../../images/capybara-react-web.jpg" alt="" />
            <p>Una capybara muy bela</p>

            <ul className='capybara-list-information'>
                <li>Weight</li>
                <li>Age</li>
                <li>Category</li>
            </ul>
        </div>
    );
}

export default CapybaraCard;