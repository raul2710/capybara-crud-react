import React, { useState } from "react";
import { getAddressById } from "../../services/api";
import AddressCard from "../AddressCard/AddressCard";

const AddressSearchById = () => {
  const [id, setId] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!id) {
      setError("Please, type an valid id.");
      return;
    }

    try {
      setError(""); // Limpa mensagens de erro
      const result = await getAddressById(id); // Busca a capivara pelo ID
      setAddress(result); // Atualiza o estado com os dados da capivara
    } catch (err) {
      setAddress(null);
      setError("Address not found.");
    }
  };

  return (
    <section id="sectionSearchAddress">
      <h2>Search Address</h2>
      <div>
        <label>Address Id:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Type a valid Id"
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {address && (
        <div>
          <h2>Address Found:</h2>
          <AddressCard
            id={address.id}
            city={address.city}
            state={address.state}
            lake_name={address.lake_name}
            capybara_id={address.capybara_id}
          />
        </div>
      )}
    </section>
  );
};

export default AddressSearchById;
