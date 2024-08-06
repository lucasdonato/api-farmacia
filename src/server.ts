import fastify from "fastify";

export const server = fastify({ logger: false });

server
	.listen({
		host: "0.0.0.0",
		port: 1000,
	})
	.then(() => {
		console.log("🚀 HTTP Server Running!");
	});
