import type { FastifyReply, FastifyRequest } from 'fastify'
import { server } from './server'
import * as bd from './mock-consultas-banco-dados'

// Tipo para parâmetros da rota
interface ParamsRequest {
  id: string
}

// Tipo para parâmetros de consulta
interface QueryRequest {
  nome?: string
}

// Rota para listar todos os remédios
server.get('/remedios', async () => bd.listarTodosRemedios())

// Rota para buscar remédio por ID
server.get(
  '/remedios/:id',
  async (request: FastifyRequest<{ Params: ParamsRequest }>, reply: FastifyReply) => {
    const remedio = bd.procurarRemediosPeloID(request.params.id)

    if (remedio) return remedio

    reply.status(404).send({ error: 'Remédio não encontrado' })
  },
)

// Rota para buscar remédio pelo nome
server.get(
  '/remedios/pesquisar',
  async (request: FastifyRequest<{ Querystring: QueryRequest }>, reply: FastifyReply) => {
    const { nome } = request.query

    if (!nome) {
      reply.status(400).send({ error: 'Parâmetro de consulta nome é necessário' })
      return
    }

    return bd.procurarRemediosPeloNome(nome)
  },
)
