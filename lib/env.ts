import { z } from 'zod'

const EnvSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  PLAUSIBLE_DOMAIN: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
})

export const env = EnvSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
  SENTRY_DSN: process.env.SENTRY_DSN,
})
