import { describe, it, expect } from "vitest";
import { Agent, Goal, Objective } from "../src/types";

describe("types", () => {
  it("should define Agent", () => {
    const agent: Agent = { id: "a", name: "b", role: "r", status: "idle" };
    expect(agent).toHaveProperty("id");
  });
  it("should define Goal", () => {
    const goal: Goal = { id: "g", description: "desc", status: "pending" };
    expect(goal.status).toBe("pending");
  });
  it("should define Objective", () => {
    const obj: Objective = { id: "o", text: "t", createdAt: new Date().toISOString() };
    expect(obj.text).toBeTypeOf("string");
  });
});