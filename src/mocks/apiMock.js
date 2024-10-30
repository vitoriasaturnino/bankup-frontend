// src/mocks/apiMock.js
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// Função para configurar os mocks da API
export function setupMockAPI() {
  const mock = new MockAdapter(axios)

  // Mock da rota do Dashboard
  mock.onGet('/api/dashboard').reply(200, {
    totalAccounts: 5,
    pendingPayments: 2,
    upcomingActions: [
      { id: 1, description: 'Pagar conta de aluguel' },
      { id: 2, description: 'Verificar multa por atraso' },
    ]
  })

  // Mock da rota de Histórico de Pagamentos
  mock.onGet('/api/payments').reply(200, [
    { id: 1, description: 'Aluguel', amount: 'R$ 1500', status: 'Pago' },
    { id: 2, description: 'Energia', amount: 'R$ 300', status: 'Pendente' },
  ])

  // Mock da rota de Configurações
  mock.onGet('/api/settings').reply(200, {
    notificationChannel: 'email',
    reminderFrequency: 3,
  })

  // Mock para salvar Configurações
  mock.onPost('/api/settings').reply(200, {
    message: 'Configurações salvas com sucesso!',
  })

  // Mock da rota de Nova Conta
  mock.onPost('/api/new-account').reply(200, {
    message: 'Nova conta cadastrada com sucesso!',
  })
}
