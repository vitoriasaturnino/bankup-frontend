// src/services/paymentService.js
import apiClient from '../axios'

export default {
  async listPayments() {
    try {
      const response = await apiClient.get('/payments');
      return response.data.data;
    } catch (error) {
      console.error("Erro ao listar pagamentos:", error);
      throw error;
    }
  },
  getPayment(id) {
    return apiClient.get(`/payments/${id}`)
  },
  createPayment(paymentData) {
    return apiClient.post('/payments', { payment: paymentData })
  },
  updatePayment(id, paymentData) {
    return apiClient.put(`/payments/${id}`, { payment: paymentData })
  },
  deletePayment(id) {
    return apiClient.delete(`/payments/${id}`)
  },
}
