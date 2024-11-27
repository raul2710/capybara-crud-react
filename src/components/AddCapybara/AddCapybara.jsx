import React, { useState } from "react";
import { createCapybara } from "../../services/api";

const AddCapybara = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    color: "",
    curiosity: "",
    classification: "Rare",
    address: {
      city: "", 
      state: "",
      lake_name: "",
    },
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split("."); // Para lidar com `address.street`

    if (keys.length === 2) {
      // Atualiza um campo do endereço
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [keys[1]]: value,
        },
      });
    } else {
      // Atualiza campos da capivara
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (
      !formData.name ||
      !formData.age ||
      !formData.color ||
      !formData.weight ||
      !formData.curiosity ||
      !formData.classification ||
      !formData.address.city ||
      !formData.address.state ||
      !formData.address.lake_name
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      const response = await createCapybara({
        ...formData,
        age: parseInt(formData.age),
        weight: parseFloat(formData.weight),
      });
      setMessage(response.message);
      setFormData({
        name: "",
        age: "",
        color: "",
        weight: "",
        curiosity: "",
        classification: "",
        address: {
          city: "",
          state: "",
          lake_name: "",
        },
      }); // Limpa o formulário
    } catch (err) {
      setMessage("Error to try add capybara. Try again.");
    }
  };

  return (
    <section id="sectionAddCapybara">
      <h2>Add a Capybara</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type a capyname"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Type a capage"
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Type the capyname"
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Type the color"
          />
        </div>
        <div>
          <label>Curiosity:</label>
          <input
            type="text"
            name="curiosity"
            value={formData.curiosity}
            onChange={handleChange}
            placeholder="Type the capy curiosity"
          />
        </div>
        <div>
          <label>Classification:</label>
          <select name="classification" id="" value={formData.classification} onChange={handleChange}>
            <option value="Rare">Rare</option>
            <option value="Comum">Comum</option>
          </select>
        </div>
        <h3>Capybara Address</h3>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Type the city"
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            placeholder="Type the state"
          />
        </div>
        <div>
          <label>Lake Name:</label>
          <input
            type="text"
            name="address.lake_name"
            value={formData.address.lake_name}
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

export default AddCapybara;
