import React, { useState } from 'react';
import { updateCapybara } from '../../services/api';

const UpdateCapybara = () => {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    color: '',
    weight: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id || !formData.name || !formData.age || !formData.color || !formData.weight) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const updatedCapybara = {
        name: formData.name,
        age: parseInt(formData.age),
        color: formData.color,
        weight: parseFloat(formData.weight),
      };
      const response = await updateCapybara(id, updatedCapybara);
      setMessage(response.message);
    } catch (err) {
      setMessage('Erro ao atualizar a capivara. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h1>Atualizar Capivara</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o ID"
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Digite a idade"
          />
        </div>
        <div>
          <label>Cor:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Digite a cor"
          />
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="number"
            step="0.1"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Digite o peso"
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateCapybara;
