import React, { useState } from 'react';
import api from '../../services/api'; // Importa a função delete

const DeleteAddressById = () => {
    const [id, setId] = useState(''); // Estado para armazenar o ID
    const [message, setMessage] = useState(''); // Mensagem de feedback para o usuário

    const deleteAddress = async (id) => {
        try {
            await api.delete(`/address/${id}`);
        } catch (error) {
            console.error('Error to delete the address:', error);
            throw error;
        }
    };

    const handleDelete = async () => {
        if (!id) {
        setMessage('Please type a valid Id.');
        return;
        }

        if (window.confirm(`Do you want to delete the address ${id}?`)) {
        try {
            await deleteAddress(id); // Chama a função de exclusão
            setMessage(`Address ${id} was delete.`);
            setId(''); // Limpa o campo de ID
        } catch (err) {
            setMessage(`Error delete address: ${err.message}`);
        }
        }
    };

    return (
        <section id='sectionDeleteAddress'>
            <h2>Delete Address</h2>
            <label>Address Id:</label>
            <input
                type="number"
                placeholder="Type a valid Id"
                value={id}
                onChange={(e) => setId(e.target.value)} // Atualiza o estado com o valor do input
            />
            <button onClick={handleDelete}>Delete</button>
            {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </section>
    );
};

export default DeleteAddressById;