import type { FastifyReply, FastifyRequest } from 'fastify'
import { server } from './server'
import remedios from './mock/remedios.json'

interface ParamsRequest {
  id: string
}

server.get('/remedios', async () => {
  return remedios
})

server.get('/remedios/:id', async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as ParamsRequest
  const remedio = remedios.find((r) => r.id === Number.parseInt(id, 10))

  if (remedio) return remedio

  reply.status(404).send({ error: 'Remedio não encontrado' })
})

server.get('/remedios/search', async (request: FastifyRequest) => {
  const { nome } = request.query as { nome?: string }

  if (!nome) return { error: 'Parâmetro de consulta q é necessário' }

  const descricaoFiltrada = remedios.filter(
    (f) => f.nome_remedio.toLowerCase() === nome.toLowerCase(),
  )
  return descricaoFiltrada
})
