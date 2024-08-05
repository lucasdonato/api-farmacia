import type { FastifyReply } from 'fastify'
import { server } from './server'
import * as bd from './mock-consultas-banco-dados'

// Rota para listar todos os remédios
server.get('/remedios', async () => bd.listarTodosRemedios())

// Rota para buscar remédio por ID
server.get('/remedios/:id', async (request, reply: FastifyReply) => {
  const id = (request.params as { id: string }).id
  const remedio = bd.procurarRemediosPeloID(id)

  if (remedio) return remedio

  reply.status(404).send({ error: 'Remédio não encontrado' })
})

// Rota para buscar remédio pelo nome
server.get('/remedios/pesquisar', async (request, reply: FastifyReply) => {
  const nome = (request.query as { nome?: string }).nome

  if (!nome) {
    reply.status(400).send({ error: 'Parâmetro de consulta nome é necessário' })
    return
  }

  return bd.procurarRemediosPeloNome(nome)
})
