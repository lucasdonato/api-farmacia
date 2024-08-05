import fastify from "fastify";

export const server = fastify({ logger: true });

server
	.listen({
		host: "0.0.0.0",
		port: 8080,
	})
	.then(() => {
		console.log("🚀 HTTP Server Running!");
	});
