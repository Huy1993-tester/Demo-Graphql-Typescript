// const  = require('express'); // cách node

import http from "http"; //cách js
import express = require("express"); // cách ts
import { ConnectDB } from "./server/server";
import { schemaGraphql } from "./graphql/schema";
import { graphqlResolver } from "./graphql/resolver";
// import  graphqlSchema from '../graphql/schema' ;  // thêm vào tsconfig.json "allowJs": true
const { graphqlHTTP } = require("express-graphql");

const app: express.Application = express();

const PORT = process.env.PORT || 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaGraphql,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

const server: http.Server = http.createServer(app);

server.listen(PORT, (): void => console.log(`http://localhost:${PORT}`));

ConnectDB();
