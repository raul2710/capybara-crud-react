import React, { useState } from 'react';
import {deleteCapybara} from '../../services/api'; // Importa a função delete

const DeleteCapybaraById = () => {
    const [id, setId] = useState(''); // Estado para armazenar o ID
    const [message, setMessage] = useState(''); // Mensagem de feedback para o usuário

    const handleDelete = async () => {
        if (!id) {
        setMessage('Por favor, insira um ID.');
        return;
        }

        if (window.confirm(`Tem certeza que deseja excluir a capivara com ID ${id}?`)) {
        try {
            await deleteCapybara(id); // Chama a função de exclusão
            setMessage(`Capivara com ID ${id} foi excluída com sucesso.`);
            setId(''); // Limpa o campo de ID
        } catch (err) {
            setMessage(`Erro ao excluir a capivara: ${err.message}`);
        }
        }
    };

    return (
        <div>
            <h1>Excluir Capivara</h1>
            <input
                type="text"
                placeholder="Digite o ID"
                value={id}
                onChange={(e) => setId(e.target.value)} // Atualiza o estado com o valor do input
            />
            <button onClick={handleDelete}>Delete</button>
            {message && <p>{message}</p>} {/* Exibe mensagens de feedback */}
        </div>
    );
};

export default DeleteCapybaraById;