import React, { useEffect, useState } from "react";
import CapybaraCard from "../CapybaraCard/CapybaraCard";
import api from "../../services/api";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CapybaraListCard.css'

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="sectionShowCapybaras">
      <h2>All Capybaras</h2>
      <p>Press F5 to reload and see the new Capybaras</p>
      <div className="carousel-container">
        <Carousel
          emulateTouch={true}
          showIndicators={false}
        >
            {
              capybaras.map((capybara) => <CapybaraCard
                name={capybara.name}
                age={capybara.age}
                weight={capybara.weight}
                color={capybara.color}
                curiosity={capybara.curiosity}
                classification={capybara.classification} />
              )
        
            // city={capybara.address.city}
            // state={capybara.address.state}
            // lake_name={capybara.address.lake_name}
          }
        </Carousel>
      </div>
    </section>
  );
};

export default CapybaraListCard;



