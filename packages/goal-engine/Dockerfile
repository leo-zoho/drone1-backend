# ---- Base Node ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY ../../package.json ../../pnpm-workspace.yaml ./
COPY package.json ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# ---- Build ----
FROM deps AS build
COPY . .
COPY ../../tsconfig.json ../../
RUN pnpm build

# ---- Release ----
FROM base AS release
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY package.json ./
RUN npm install -g pnpm
EXPOSE 3001
CMD ["node", "dist/index.js"]