import { describe, it, expect } from "vitest";
import Fastify from "fastify";
import { healthRoute } from "../src/routes/health";

describe("api-gateway health", () => {
  it("GET /health returns ok", async () => {
    const app = Fastify();
    await app.register(healthRoute, { prefix: "/health" });
    const response = await app.inject({ method: "GET", url: "/health/" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty("status", "ok");
  });
});