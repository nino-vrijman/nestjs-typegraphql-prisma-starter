# Nest.js TypeGraphQL Prisma starter

A Nest.js starter project with TypeGraphQLs Prisma integration, allowing you to create a GraphQL CRUD API based on your Prisma Schema without having to write any other boilerplate code.

## Description

This set-up takes your Prisma Schema and automatically generates TypeGraphQL CRUD resolvers, models, inputs and outputs based on the models in your schema, these generated types are compatible with Nest.js.

Based on the resolvers you register in your `app.module.ts` (more on that later) TypeGraphQL Nest.js will build a GraphQL schema.

The result is a Nest.js GraphQL API which can be used to directly save any data to a Postgres database. Ideal for prototyping (maybe even more so if you use the `prisma schema push` command which is available in the `schema-push` branch of this repository)!

The server also has a GraphQL Playground which allows you to get started right away!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# watching for changes in the schema.prisma file
$ npm run prisma:generate:watch
```
