/* eslint-disable @typescript-eslint/no-explicit-any */
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export default async function handler(req: any, res: any) {
  // 1) CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 2) Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing ID" });
  }

  if (req.method === "GET") {
    const count = (await redis.get<number>(`fav:${id}`)) || 0;
    return res.status(200).json({ count });
  }

  if (req.method === "POST") {
    const { increment } = req.body || { increment: 1 };
    const add = typeof increment === "number" ? increment : 1;

    const count = await redis.incrby(`fav:${id}`, add);
    return res.status(200).json({ count });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
