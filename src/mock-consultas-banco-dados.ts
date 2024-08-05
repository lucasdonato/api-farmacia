import remedios from './mock/remedios.json'

export const procurarRemediosPeloID = (id: string) =>
  remedios.find((r) => r.id === Number.parseInt(id, 10))

export const procurarRemediosPeloNome = (nome: string) =>
  remedios.filter((f) => f.nome_remedio.toLowerCase() === nome.toLowerCase())

export const listarTodosRemedios = () => {
  return remedios
}
