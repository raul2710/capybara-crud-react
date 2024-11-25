import './App.css';
import AddAddress from './components/AddAddress/AddAddress';
import AddCapybara from './components/AddCapybara/AddCapybara';
import AddressList from './components/AddressList/AddressList';
import AddressSearchById from './components/AddressSearchById/AddressSearchById';
import CapybaraListCard from './components/CapybaraListCard/CapybaraListCard';
import CapybaraSearchById from './components/CapybaraSearchById/CapybaraSearchById';
import DeleteAddressById from './components/DeleteAddressById/DeleteAddressById';
import DeleteCapybaraById from './components/DeleteCapybaraById/DeleteCapybaraById';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import IntroductionApi from './components/IntroductionApi/IntroductionApi';
import UpdateAddress from './components/UpdateAddress/UpdateAddress';
import UpdateCapybara from './components/UpdateCapybara/UpdateCapybara';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu />
      </header>

      <main>
        <div>
          <IntroductionApi />

          <AddCapybara />
          <CapybaraListCard />
          <CapybaraSearchById />
          <UpdateCapybara />
          <DeleteCapybaraById />

          <AddAddress />
          <AddressList />
          <UpdateAddress />
          <AddressSearchById />
          <DeleteAddressById />
          
        </div>
      </main>

      <footer>
        Develope by Raul
      </footer>
    </div>
  );
}

export default App;
