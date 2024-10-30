// src/services/recurringAccountService.js
import apiClient from '../axios'

export default {
  listRecurringAccounts() {
    return apiClient.get('/recurring_accounts')
  },
  getRecurringAccount(id) {
    return apiClient.get(`/recurring_accounts/${id}`)
  },
  createRecurringAccount(accountData) {
    return apiClient.post('/recurring_accounts', { recurring_account: accountData })
  },
  updateRecurringAccount(id, accountData) {
    return apiClient.put(`/recurring_accounts/${id}`, { recurring_account: accountData })
  },
  deleteRecurringAccount(id) {
    return apiClient.delete(`/recurring_accounts/${id}`)
  },
}
