// src/services/notificationService.js
import apiClient from '../axios'

export default {
  listNotifications() {
    return apiClient.get('/notifications')
  },
  getNotification(id) {
    return apiClient.get(`/notifications/${id}`)
  },
  createNotification(notificationData) {
    return apiClient.post('/notifications', { notification: notificationData })
  },
}
