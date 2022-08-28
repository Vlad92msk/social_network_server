import {Module} from '@nestjs/common'
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {GraphQLModule} from '@nestjs/graphql'
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import mainConfig from './config/main.config'
import {AuthModule} from "./lib/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mainConfig],
      isGlobal: true,
      envFilePath: '../.env'
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/lib/**/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {
}
