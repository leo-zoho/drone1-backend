import dotenv from "dotenv";

dotenv.config();

export const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] || fallback;
  if (!value) throw new Error(`Missing env: ${key}`);
  return value;
};