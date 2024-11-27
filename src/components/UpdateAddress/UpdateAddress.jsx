import React, { useState } from "react";
import { updateAddress } from "../../services/api";

const UpdateAddress = () => {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    lake_name: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id || !formData.city || !formData.state || !formData.lake_name) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      const response = await updateAddress(id, { ...formData });
      setMessage(response.message);
    } catch (err) {
      setMessage("Error to try update address. Try again.");
    }
  };

  return (
    <section id="sectionUpdateAddress">
      <h2>Update Address</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Address Id:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o ID"
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
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default UpdateAddress;
