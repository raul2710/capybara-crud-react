import React, { useEffect, useState } from 'react';
import CapybaraCard from "../CapybaraCard/CapybaraCard";
import api from '../../services/api';

const AddressList = () => {
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
        <div className='carousel'>
        <h1>Capybaras</h1>
            {capybaras.map((capybara) => (
                <CapybaraCard 
                    name={capybara.name}
                    age={capybara.age}
                    weight={capybara.weight}
                    color={capybara.color}
                    curiosity={capybara.curiosity}
                    classification={capybara.classification}
                />
            ))}
        </div>
    );
};

export default AddressList;
