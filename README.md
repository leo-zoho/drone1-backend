# drone1 Autonomous Agent Orchestrator Monorepo

A scalable Turborepo monorepo for the `drone1` Autonomous Agent Orchestrator backend, using pnpm, TypeScript, Fastify, and a modular, service-oriented architecture.

## Tech Stack

- **Monorepo:** Turborepo
- **Package Manager:** pnpm
- **Language:** TypeScript
- **Runtime:** Node.js (LTS)
- **Web Framework:** Fastify
- **Message Broker:** NATS (pluggable with Kafka)
- **Databases:** PostgreSQL, Neo4j, Redis, MinIO/S3
- **API:** REST (OpenAPI-ready), extensible to GraphQL
- **Auth:** OAuth2.0 + JWT (scoped RBAC)
- **Testing:** Vitest
- **Dev Tools:** ESLint, Prettier, Husky, Commitlint
- **Observability:** Prometheus, Grafana, Loki

## Folder Structure

```
drone1/
├── apps/
│   └── api-gateway/           # Entry point for all requests
├── packages/
│   ├── common/                # Shared types, utils, interfaces
│   └── goal-engine/           # Objective intake, parsing, decomposition
├── .github/
│   └── workflows/
│       └── ci.yml             # CI pipeline
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.json
```

## Quick Start

```sh
# Install dependencies
pnpm install

# Start goal-engine in dev mode
pnpm dev --filter goal-engine

# Start api-gateway in dev mode
pnpm dev --filter api-gateway

# Build all
pnpm build
```

## Service Endpoints

- **goal-engine**
  - `POST /objectives`
  - `POST /parseGoal`
  - `POST /decomposeGoal`
- **api-gateway**
  - `GET /health`
  - [Gateway for all requests]

## Dev Tools

- Lint: `pnpm lint`
- Format: `pnpm format`
- Test: `pnpm test`
- CI: See `.github/workflows/ci.yml`

## Docker

- Each service: Dockerfile (multi-stage)
- `docker-compose.yaml` for local orchestration

---

**See prompt for the full implementation plan.**