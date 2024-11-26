import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL base da API
});

export const createCapybara = async (data) => {
  try {
    const response = await api.post('/capybara', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar a capivara:', error);
    throw error;
  }
};

export const createAddress = async (capybara_id, data) => {
  try {
    const response = await api.post(`/capybara/${capybara_id}/address`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar a address:', error);
    throw error;
  }
};


export const deleteCapybara = async (id) => {
  try {
      await api.delete(`/capybara/${id}`);
  } catch (error) {
      console.error('Erro ao deletar a capivara:', error);
      throw error;
  }
};

export const getCapybaraById = async (id) => {
  try {
    const response = await api.get(`/capybara/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar capivara:', error);
    throw error;
  }
};

export const getAddressById = async (id) => {
  try {
    const response = await api.get(`/address/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar capivara:', error);
    throw error;
  }
};

export const updateCapybara = async (id, data) => {
  try {
    const response = await api.put(`/capybara/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar capivara:', error);
    throw error;
  }
};

export const updateAddress = async (id, data) => {
  try {
    const response = await api.put(`/address/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar capivara:', error);
    throw error;
  }
};

export default api;