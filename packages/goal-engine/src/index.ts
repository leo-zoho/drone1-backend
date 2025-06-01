import Fastify from "fastify";
import { objectivesRoute } from "./routes/objectives";
import { parseGoalRoute } from "./routes/parseGoal";
import { decomposeGoalRoute } from "./routes/decomposeGoal";
import swagger from "@fastify/swagger";

const server = Fastify({
  logger: true,
});

server.register(swagger, {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "drone1 Goal Engine",
      description: "Goal Engine API for drone1 agent orchestrator",
      version: "0.1.0",
    },
    tags: [{ name: "goal-engine" }],
  },
  exposeRoute: true,
});

server.register(objectivesRoute, { prefix: "/objectives" });
server.register(parseGoalRoute, { prefix: "/parseGoal" });
server.register(decomposeGoalRoute, { prefix: "/decomposeGoal" });

const start = async () => {
  try {
    await server.listen({ port: 3001, host: "0.0.0.0" });
    server.log.info(`goal-engine listening on http://localhost:3001`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();