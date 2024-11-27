import React, { useState } from 'react';
import {deleteCapybara} from '../../services/api'; // Importa a função delete

const DeleteCapybaraById = () => {
    const [id, setId] = useState(''); // Estado para armazenar o ID
    const [message, setMessage] = useState(''); // Mensagem de feedback para o usuário

    const handleDelete = async () => {
        if (!id) {
        setMessage('Please type a valid Id.');
        return;
        }

        if (window.confirm(`Do you want to delete the capybara ${id}?`)) {
        try {
            await deleteCapybara(id); // Chama a função de exclusão
            setMessage(`Capybara ${id} was delete.`);
            setId(''); // Limpa o campo de ID
        } catch (err) {
            setMessage(`Error to delete the capybara: ${err.message}`);
        }
        }
    };

    return (
        <section id='sectionDeleteCapybara'>
            <h2>Delete Capybara</h2>
            <label>Capybara Id:</label>
            <input
                type="number"
                placeholder="Digite o ID"
                value={id}
                onChange={(e) => setId(e.target.value)} // Atualiza o estado com o valor do input
            />
            <button className='delete' onClick={handleDelete}>Delete</button>
            {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </section>
    );
};

export default DeleteCapybaraById;