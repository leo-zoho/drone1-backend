import { connect, NatsConnection } from "nats";

let natsConnection: NatsConnection | undefined;

export async function getNatsClient(): Promise<NatsConnection> {
  if (!natsConnection) {
    natsConnection = await connect({ servers: process.env.NATS_URL || "nats://localhost:4222" });
  }
  return natsConnection;
}