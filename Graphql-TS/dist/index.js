"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express = require("express");
const server_1 = require("./server/server");
const schema_1 = require("./graphql/schema");
const resolver_1 = require("./graphql/resolver");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const PORT = process.env.PORT || 3001;
app.use("/graphql", graphqlHTTP({
    schema: schema_1.schemaGraphql,
    rootValue: resolver_1.graphqlResolver,
    graphiql: true,
}));
const server = http_1.default.createServer(app);
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
(0, server_1.ConnectDB)();
//# sourceMappingURL=index.js.map