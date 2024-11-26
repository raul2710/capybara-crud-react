import "./AddCapybara.css";

import React, { useState } from "react";
import { createCapybara } from "../../services/api";

// function AddCapybara() {

//     // const [post, setPost] = useState(
//     //     name,
//     //     age,

//     // );

//     // React.useEffect(() => {
//     //   axios.post(baseURL, {

//     //   }).then((response) => {
//     //     setPost(response.data);
//     //   });
//     // }, []);

//     // if (!post) return null;
//     function saveCapybara() {
//         axios.post(baseURL, {
//             "name": "string",
//             "age": 0,
//             "weight": 0,
//             "color": "string",
//             "curiosity": "string",
//             "classification": "Rare",
//             "address": {
//                 "city": "string",
//                 "state": "string",
//                 "lake_name": "string"
//             }
//         }).then((response) => {
//             setPost(response.data);
//         });
//     }

//     return (
//         <section className='add-capybara-section'>
//             <form className="form-add-capybara">
//                 <title>Add your own capybara</title>
//                 <h2>Add your own capybara</h2>

//                 <label htmlFor="">Name: </label>
//                 <input type="text" about='texet' placeholder='Type the name' title='Teste'/>

//                 <label htmlFor="">Age: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <label htmlFor="">Weight: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <label htmlFor="">Color: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <label htmlFor="">Curiosity: </label>
//                 <textarea name="" id="" placeholder="Type about your capybara"></textarea>

//                 <label htmlFor="">Classification: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <h2>Address</h2>

//                 <label htmlFor="">City: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <label htmlFor="">State: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <label htmlFor="">Lake name: </label>
//                 <input name="" id="" placeholder="Type about your capybara"></input>

//                 <button type="submit" onClick={saveCapybara}> Add</button>
//                 <button>Cancel</button>
//             </form>
//         </section>
//     );
// }

// export default AddCapybara;

const AddCapybara = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    weight: 0,
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
    setFormData({ ...formData, [name]: value }); // Atualiza os valores do formulário dinamicamente
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      age,
      weight,
      color,
      curiosity,
      classification,
      address: { city, state, lake_name },
    } = formData;

    if (!city || !state || !lake_name) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const newCapybara = {
        name,
        age,
        weight,
        color,
        curiosity,
        classification,
        address: {
          city,
          state,
          lake_name,
        },
      };
      const response = await createCapybara(newCapybara);
      setMessage(response.message);
      setFormData({
        name: "",
        age: 0,
        weight: 0,
        color: "",
        curiosity: "",
        classification: "",
        address: {
          city: "",
          state: "",
          lake_name: "",
        },
      }); // Limpa o formulário
    } catch (err) {
      setMessage(
        "Erro ao adicionar a capivara. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div>
      <h1>Adicionar Capivara</h1>
      <form onSubmit={handleSubmit}>
        <title>Add your own capybara</title>
        <h2>Add your own     capybara</h2>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Digite o ID"
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Digite o nome"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="curiosity"
            value={formData.curiosity}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="classification"
            value={formData.classification}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="address"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="address"
            value={formData.address.state}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <div>
          <label>lake_name:</label>
          <input
            type="text"
            name="address"
            value={formData.address.lake_name}
            onChange={handleChange}
            placeholder="Type the lake name"
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCapybara;
