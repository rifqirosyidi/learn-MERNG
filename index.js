const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGODBCONN } = require('./config')
const Post = require('./models/Post')


const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String
    }
    type Query {
        getPosts: [Post]
    }
`

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find()
                return posts
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODBCONN, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    server.listen({port: 5000})
    console.log(`Connected. listen on port 5000`)
})


