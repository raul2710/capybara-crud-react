import React, { useEffect, useState } from "react";
import api from "../../services/api";
import AddressCard from "../AddressCard/AddressCard";
import { Carousel } from "react-responsive-carousel";

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCapybaras = async () => {
      try {
        const response = await api.get("/addresses"); // Chama a rota da API
        setAddresses(response.data); // Salva os dados no estado
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
    <div>
      <h2>All Addresses</h2>
      <Carousel emulateTouch={true} showIndicators={false}>
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </Carousel>
    </div>
    // <div className='carousel'>
    // <h2>All Addresses</h2>
    //     {addresses.map((address) => (
    //         <AddressCard
    //             id={address.id}
    //             city={address.city}
    //             state={address.state}
    //             lake_name={address.lake_name}
    //             capybara_id={address.capybara_id}
    //         />
    //     ))}
    // </div>
  );
};

export default AddressList;
