// Shared types for drone1

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: string;
}

export interface Goal {
  id: string;
  description: string;
  status: "pending" | "active" | "completed" | "failed";
  agentId?: string;
}

export interface Objective {
  id: string;
  text: string;
  createdAt: string;
}

export interface DecompositionStep {
  step: number;
  action: string;
}