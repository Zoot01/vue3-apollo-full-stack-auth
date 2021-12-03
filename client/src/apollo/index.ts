import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client/core'

export const GRAPHQL_API_URL = 'https://rickandmortyapi.com/graphql'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: GRAPHQL_API_URL,
})

// Cache implementation
export const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: true,
})
