import fastify from 'fastify'
import farmacias from './mock/farmacias.json'

const server = fastify({ logger: true })

server.get('/farmacias', async () => {
  return farmacias
})

server
  .listen({
    host: '0.0.0.0',
    port: 8080,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
