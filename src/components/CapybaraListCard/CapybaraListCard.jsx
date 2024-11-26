import React, { useEffect, useState } from 'react';
import CapybaraCard from "../CapybaraCard/CapybaraCard";
import api from '../../services/api';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CapybaraListCard = () => {
    const [capybaras, setCapybaras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCapybaras = async () => {
            try {
                const response = await api.get('/capybaras'); // Chama a rota da API
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
        <Carousel
           
            responsive={responsive}
                        >
            {capybaras.map((capybara) => (
            <CapybaraCard 
                    name={capybara.name}
                    age={capybara.age}
                    weight={capybara.weight}
                    color={capybara.color}
                    curiosity={capybara.curiosity}
                    classification={capybara.classification}

                    // city={capybara.address.city}
                    // state={capybara.address.state}
                    // lake_name={capybara.address.lake_name}
                />
            ))}
        </Carousel>
        // <div>
        //     <h2>All capybaras</h2>
            
        //     <div className='carousel'>
        //         {capybaras.map((capybara) => (
        //         <CapybaraCard 
        //             name={capybara.name}
        //             age={capybara.age}
        //             weight={capybara.weight}
        //             color={capybara.color}
        //             curiosity={capybara.curiosity}
        //             classification={capybara.classification}

        //             // city={capybara.address.city}
        //             // state={capybara.address.state}
        //             // lake_name={capybara.address.lake_name}
        //         />
        //         ))}
        //     </div>
        // </div>
            
        
    );
};

export default CapybaraListCard;
