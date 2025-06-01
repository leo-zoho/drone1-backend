import { FastifyInstance } from "fastify";

export async function healthRoute(server: FastifyInstance) {
  server.get("/", async () => {
    return { status: "ok", service: "api-gateway" };
  });
}