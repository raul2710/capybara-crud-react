import React, { useState } from "react";
import { createAddress } from "../../services/api";

const AddAddress = () => {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    lake_name: "",
  });
  const [capybara_id, setCapybaraId] = useState(0);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Atualiza os valores do formulário dinamicamente
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { city, state, lake_name } = formData;

    if (!city || !state || !lake_name) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      const newAddress = {
        city,
        state,
        lake_name,
      };
      const response = await createAddress(capybara_id, newAddress);
      setMessage(response.message);
      setFormData({ city: "", state: "", lake_name: "" }); // Limpa o formulário
      setCapybaraId(0);
    } catch (err) {
      setMessage("Error to try add address. Try again.");
    }
  };

  return (
    <section id="sectionAddAddress">
      <h2>Add an Address</h2>
      <p>It's function only for capybaras that don't have address</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Capybara Id:</label>
          <input
            type="number"
            name="id"
            value={capybara_id}
            onChange={(e) => setCapybaraId(e.target.value)}
            placeholder="Type the capId"
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Type the city"
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Type the state"
          />
        </div>
            <div>
            <label>Lake Name:</label>
            <input
                type="text"
                name="lake_name"
                value={formData.lake_name}
                onChange={handleChange}
                placeholder="Type the lake name"
            />
            </div>
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default AddAddress;
