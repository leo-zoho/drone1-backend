import { describe, it, expect } from "vitest";
import Fastify from "fastify";
import { objectivesRoute } from "../src/routes/objectives";

describe("goal-engine objectives", () => {
  it("POST /objectives receives objective", async () => {
    const app = Fastify();
    await app.register(objectivesRoute, { prefix: "/objectives" });
    const response = await app.inject({
      method: "POST",
      url: "/objectives/",
      payload: { objective: "Test objective" },
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty("message", "Objective received");
  });
});