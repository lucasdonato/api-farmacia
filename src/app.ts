import type { FastifyReply } from "fastify";
import { server } from "./server";
import * as mockbd from "./mocks/consultas-banco-de-dados";

// Rota para listar todos os remédios
server.get("/remedios", async () => mockbd.listarTodosRemedios());

// Rota para buscar remédio por ID
server.get("/remedios/:id", async (request, reply: FastifyReply) => {
	const id = (request.params as { id: string }).id;
	const remedio = mockbd.procurarRemediosPeloID(id);

	if (remedio) return remedio;

	reply.status(404).send({ error: "Remédio não encontrado" });
});

// Rota para buscar remédio pelo nome
server.get("/remedios/pesquisar", async (request, reply: FastifyReply) => {
	const nome = (request.query as { nome?: string }).nome;

	if (!nome) {
		reply
			.status(400)
			.send({ error: "Parâmetro de consulta nome é necessário" });
		return;
	}

	return mockbd.procurarRemediosPeloNome(nome);
});
