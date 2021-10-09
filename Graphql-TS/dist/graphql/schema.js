"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaGraphql = void 0;
const graphql_1 = require("graphql");
exports.schemaGraphql = (0, graphql_1.buildSchema)(`
    type User{
        id: Int!  
        name: String!;
        email: String!;
        password: String!;
        phone: String!;
        role: String!;                    
    }
    type rootQuery{
        users: [User]!
    }
    schema{
        query:rootQuery
    }
`);
//# sourceMappingURL=schema.js.map