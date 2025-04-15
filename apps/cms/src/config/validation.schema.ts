import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(5000),
  DATABASE_URL: Joi.string().required(),
  DATABASE_LOGGING: Joi.boolean().default(false),
  DATABASE_LOG_LEVEL: Joi.string(),
  DATABASE_LOG_LEVEL_DEV: Joi.string().default('query'),
  DATABASE_LOG_LEVEL_PROD: Joi.string().default('error'),
  DATABASE_LOG_LEVEL_TEST: Joi.string().default('error'),
  DATABASE_LOG_LEVEL_DEFAULT: Joi.string().default('error'),

  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_ACCESS_EXPIRATION: Joi.string().default('1h'),
  JWT_REFRESH_EXPIRATION: Joi.string().default('30d'),
  JWT_ISSUER: Joi.string().default('my-app'),
  JWT_AUDIENCE: Joi.string().default('my-app'),
  JWT_ALGORITHM: Joi.string().valid('HS256', 'RS256').default('HS256'),

  EMAIL_HOST: Joi.string().required(),
  EMAIL_PORT: Joi.number().required(),
  EMAIL_SECURE: Joi.boolean().required(),
  EMAIL_USER: Joi.string().required(),
  EMAIL_PASSWORD: Joi.string().required(),
  EMAIL_FROM: Joi.string().email().required(),
  FRONTEND_URL: Joi.string().uri().required(),

  GOOGLE_CLIENT_ID: Joi.string().optional(),
  GOOGLE_CLIENT_SECRET: Joi.string().optional(),
  GOOGLE_CALLBACK_URL: Joi.string().uri().optional(),

  FACEBOOK_CLIENT_ID: Joi.string().optional(),
  FACEBOOK_CLIENT_SECRET: Joi.string().optional(),
  FACEBOOK_CALLBACK_URL: Joi.string().uri().optional(),
});
