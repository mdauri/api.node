import { Request, Response, NextFunction } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import * as redis from "redis";

import { AppError } from "@shared/errors/AppError";

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
  });

  try {
    await redisClient.connect();
  } catch (error) {
    console.log(error);
  }

  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 5,
    duration: 5,
  });
  try {
    await limiter.consume(request.ip);
    return next();
  } catch (err) {
    throw new AppError(err.message, 429);
  }
}
