import Fastify from "fastify";
import { healthRoute } from "./routes/health";
import swagger from "@fastify/swagger";

const server = Fastify({
  logger: true,
});

server.register(swagger, {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "drone1 API Gateway",
      description: "API Gateway for drone1 autonomous agent orchestrator",
      version: "0.1.0",
    },
    tags: [{ name: "health" }],
  },
  exposeRoute: true,
});

server.register(healthRoute, { prefix: "/health" });

const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    server.log.info(`API Gateway listening on http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();