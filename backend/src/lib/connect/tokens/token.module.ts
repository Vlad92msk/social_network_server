import {Token} from '@lib/connect/tokens/entities/token.entity'
import { Module } from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { TokenService } from './token.service'

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Token])
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
