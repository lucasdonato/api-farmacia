import remedios from './mock/remedios.json'

// Função auxiliar para buscar remédio por ID
export const procurarRemediosPeloID = (id: string) =>
  remedios.find((r) => r.id === Number.parseInt(id, 10))

// Função auxiliar para buscar remédios por nome
export const procurarRemediosPeloNome = (nome: string) =>
  remedios.filter((f) => f.nome_remedio.toLowerCase() === nome.toLowerCase())

export const listarTodosRemedios = () => {
  return remedios
}
