const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGODBCONN } = require('./config')
const Post = require('./models/Post')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODBCONN, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    server.listen({port: 5000})
    console.log(`Connected. listen on port 5000`)
})


