import fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import remedios from './mock/remedios.json'

const server = fastify({ logger: true })

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

server
  .listen({
    host: '0.0.0.0',
    port: 8080,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
