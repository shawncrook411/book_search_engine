const typeDefs = `
    type Book { 
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    input saveBookContent {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        saveBook(userId: ID!, data: saveBookContent!): User
        removeBook(userId: ID!, bookId: ID!): User
    }
   
`
module.exports = typeDefs