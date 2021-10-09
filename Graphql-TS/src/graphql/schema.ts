import { buildSchema } from "graphql";

export const schemaGraphql = buildSchema(`
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
