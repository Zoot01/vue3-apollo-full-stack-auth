import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

export const GRAPHQL_API_URL = 'http://localhost:2323/graphql'

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('accessToken')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: GRAPHQL_API_URL,
})

// Cache implementation
export const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    connectToDevTools: true,
    credentials: 'include',
})
