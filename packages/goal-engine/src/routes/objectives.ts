import { FastifyInstance } from "fastify";

export async function objectivesRoute(server: FastifyInstance) {
  server.post("/", {
    schema: {
      body: {
        type: "object",
        properties: {
          objective: { type: "string" }
        },
        required: ["objective"]
      }
    }
  }, async (req, reply) => {
    const { objective } = req.body as { objective: string };
    // TODO: Store in DB
    return { message: "Objective received", objective };
  });
}