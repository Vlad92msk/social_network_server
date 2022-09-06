if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}
import {NestFactory} from '@nestjs/core'
import {ConfigService} from '@nestjs/config'
import * as cookieParser from 'cookie-parser'
import {config} from 'dotenv'
import {AppModule} from '@lib/app.module'
import {ConfigEnum} from '@config/config.enum'

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())
  app.enableCors()

  const config = await app.get(ConfigService)
  const port = Number(config.get(`${ConfigEnum.MAIN}.port`))
  const host = String(config.get(`${ConfigEnum.MAIN}.host`))

  await app.listen(port, () => {
    console.log(`Сервер доступен - http://${host}:${port}/graphql`)
  })
}

bootstrap()
