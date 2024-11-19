import './App.css';
import CapybaraCard from './components/CapybaraCard/CapybaraCard';
import FormsAddCapybara from './components/CapybaraAdd/CapybaraAdd';
import CapybaraListCard from './components/CapybaraListCard/CapybaraListCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>test</li>
          <li>teste</li>
        </ul>
      </header>


      <div className='carousel'>
        <CapybaraCard />
        <CapybaraCard />
        <CapybaraCard />
        <CapybaraCard />
        <FormsAddCapybara />
        <CapybaraListCard />
      </div>
    </div>
  );
}

export default App;
