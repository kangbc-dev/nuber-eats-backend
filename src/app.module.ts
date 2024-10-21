import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(
        process.cwd(),
        'src/schema-gql',
      ) /* process.cwd() 현재 작업 절대경로 ,path.join('/Users/kangbc/dev/nomadcoder/nuber-eats-backend/nuber-eats-backend', 'src/schema-gql') === '/src/schema.gql' 경로 합쳐주는 메소드.  */,
      driver: ApolloDriver,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
