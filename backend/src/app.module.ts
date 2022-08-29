import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from '@db/db.module';
import mainConfig from '@config/main.config';
import { AuthModule } from '@lib/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mainConfig],
      isGlobal: true,
      envFilePath: '../.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()], // playground заменяется на ApolloStudio импорт из 'apollo-server-core'
    }),
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {
}
