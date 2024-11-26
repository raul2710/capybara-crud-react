import "./App.css";
import React, { useState, useEffect } from 'react';
import AddAddress from "./components/AddAddress/AddAddress";
import AddCapybara from "./components/AddCapybara/AddCapybara";
import AddressList from "./components/AddressList/AddressList";
import AddressSearchById from "./components/AddressSearchById/AddressSearchById";
import CapybaraListCard from "./components/CapybaraListCard/CapybaraListCard";
import CapybaraSearchById from "./components/CapybaraSearchById/CapybaraSearchById";
import DeleteAddressById from "./components/DeleteAddressById/DeleteAddressById";
import DeleteCapybaraById from "./components/DeleteCapybaraById/DeleteCapybaraById";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import IntroductionApi from "./components/IntroductionApi/IntroductionApi";
import UpdateAddress from "./components/UpdateAddress/UpdateAddress";
import UpdateCapybara from "./components/UpdateCapybara/UpdateCapybara";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  // Função para verificar a posição do scroll
  const checkScroll = () => {
    if (window.scrollY > 50) {
      // Quando rolar mais de 50px
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Hook para adicionar o evento de rolagem
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <HeaderMenu />
      </header>

      <main>
        <div>
          <IntroductionApi />

          <AddCapybara />
          <CapybaraListCard />
          <UpdateCapybara />
          <CapybaraSearchById />
          <DeleteCapybaraById />

          <AddAddress />
          <AddressList />
          <UpdateAddress />
          <AddressSearchById />
          <DeleteAddressById />
        </div>
      </main>

      <footer>Develope by Raul</footer>
    </div>
  );
}

export default App;
