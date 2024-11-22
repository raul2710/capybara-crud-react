import './App.css';
import FormsAddCapybara from './components/CapybaraAdd/CapybaraAdd';
import CapybaraListCard from './components/CapybaraListCard/CapybaraListCard';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu />
      </header>


      <main>
        <div>
          <FormsAddCapybara />
          <CapybaraListCard />
        </div>
      </main>

      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
