import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { providers } from './app.providers';

interface Context {
  prisma: PrismaClient;
}

@Module({
  imports: [
    TypeGraphQLModule.forRootAsync({
      imports: [PrismaModule],
      inject: [PrismaService],
      useFactory(prisma: PrismaService) {
        return {
          emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
          validate: false,
          context: (): Context => ({ prisma }),
        };
      },
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [...providers, AppService],
})
export class AppModule {}
