import React, { useState } from "react";
import { getCapybaraById } from "../../services/api";
import CapybaraCard from "../CapybaraCard/CapybaraCard";

const CapybaraSearchById = () => {
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
      const result = await getCapybaraById(id); // Busca a capivara pelo ID
      setCapybara(result); // Atualiza o estado com os dados da capivara
    } catch (err) {
      setCapybara(null);
      setError("Capivara não encontrada.");
    }
  };

  return (
    <section id="sectionSearchCapybara">
      <h2>Search Capybara</h2>
      <div>
        <label>Capybara Id:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Digite o ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {capybara && (
        <div>
          <h3>Capybara Found:</h3>
          <CapybaraCard
            name={capybara.name}
            age={capybara.age}
            weight={capybara.weight}
            color={capybara.color}
            curiosity={capybara.curiosity}
            classification={capybara.classification}
          />
        </div>
      )}
    </section>
  );
};

export default CapybaraSearchById;
