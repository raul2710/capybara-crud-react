import React, { useState } from "react";
import { getAddressById } from "../../services/api";
import CapybaraCard from "../CapybaraCard/CapybaraCard";

const AddressSearchById = () => {
  const [id, setId] = useState("");
  const [capybara, setCapybara] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!id) {
      setError("Por favor, insira um ID.");
      return;
    }

    try {
      setError(""); // Limpa mensagens de erro
      const result = await getAddressById(id); // Busca a capivara pelo ID
      setCapybara(result); // Atualiza o estado com os dados da capivara
    } catch (err) {
      setCapybara(null);
      setError("Capivara não encontrada.");
    }
  };

  return (
    <div>
      <h1>Search Address By Id</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o ID"
          />
        </div>
        <button type="submit">Pesquisar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {capybara && (
        <div>
          <h2>Capivara Encontrada:</h2>
            <CapybaraCard 
                name={capybara.city}
                age={capybara.state}
                weight={capybara.lake_name}
                
            />
        </div>
      )}
    </div>
  );
};

export default AddressSearchById;
