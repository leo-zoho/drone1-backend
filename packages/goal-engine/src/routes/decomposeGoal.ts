import { FastifyInstance } from "fastify";

export async function decomposeGoalRoute(server: FastifyInstance) {
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
    // TODO: Decomposition logic
    return {
      message: "Goal decomposed",
      goal,
      steps: [
        { step: 1, action: "Analyze goal" },
        { step: 2, action: "Break into sub-goals" }
      ]
    };
  });
}