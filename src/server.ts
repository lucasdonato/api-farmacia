import fastify from "fastify";

export const server = fastify({ logger: true });
const PORT = process.env.PORT || 3333;

server
	.listen({
		host: "0.0.0.0",
		port: Number(PORT),
	})
	.then(() => {
		console.log("🚀 HTTP Server Running!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

export default server;
