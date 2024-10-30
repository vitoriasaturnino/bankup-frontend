// src/services/clientService.js
import apiClient from '../axios'

export default {
  async listClients() {
    try {
      const response = await apiClient.get("/clients");
      return response.data.data; // Corrigido para acessar o array de clientes diretamente
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      throw error;
    }
  },
  getClient(id) {
    return apiClient.get(`/clients/${id}`)
  },
  createClient(clientData) {
    return apiClient.post('/clients', { client: clientData })
  },
  updateClient(id, clientData) {
    return apiClient.put(`/clients/${id}`, { client: clientData })
  },
  deleteClient(id) {
    return apiClient.delete(`/clients/${id}`)
  },
}
