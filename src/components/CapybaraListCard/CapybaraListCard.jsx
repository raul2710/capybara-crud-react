import React, { useEffect, useState } from "react";
import CapybaraCard from "../CapybaraCard/CapybaraCard";
import api from "../../services/api";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CapybaraListCard = () => {
  const [capybaras, setCapybaras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCapybaras = async () => {
      try {
        const response = await api.get("/capybaras"); // Chama a rota da API
        setCapybaras(response.data); // Salva os dados no estado
      } catch (err) {
        setError(err.message); // Captura qualquer erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchCapybaras();
  }, []); // Executa apenas na montagem do componente

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Capybaras</h2>
      <Carousel
        emulateTouch={true}
        showIndicators={false}
      >
        <CapybaraCard />
        <CapybaraCard />
        <CapybaraCard />
        <CapybaraCard />
        <CapybaraCard />
      </Carousel>
    </div>
  );
};

export default CapybaraListCard;


    //         capybaras.map((capybara) => ( 
    //             name={capybara.name}
    //             age={capybara.age}
    //             weight={capybara.weight}
    //             color={capybara.color}
    //             curiosity={capybara.curiosity}
    //             classification={capybara.classification}

    //             // city={capybara.address.city}
    //             // state={capybara.address.state}
    //             // lake_name={capybara.address.lake_name}
