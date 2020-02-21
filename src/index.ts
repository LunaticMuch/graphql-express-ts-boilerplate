import fs from 'fs';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();
const schema = makeExecutableSchema({ typeDefs });

var server = express();

server.use(
  '/',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

server.listen(4000, function() { console.log(`🚀 Server ready at http://localhost:4000/`);})

