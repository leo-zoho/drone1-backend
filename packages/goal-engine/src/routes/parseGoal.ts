import { FastifyInstance } from "fastify";

export async function parseGoalRoute(server: FastifyInstance) {
  server.post("/", {
    schema: {
      body: {
        type: "object",
        properties: {
          goal: { type: "string" }
        },
        required: ["goal"]
      }
    }
  }, async (req, reply) => {
    const { goal } = req.body as { goal: string };
    // TODO: Parse logic
    return { message: "Goal parsed", goal, parsed: { tokens: goal.split(" ") } };
  });
}