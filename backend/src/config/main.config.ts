import { registerAs } from '@nestjs/config'

export default registerAs('main', () => ({
  host: process.env.API_HOST,
  port: process.env.API_PORT,
}));
