import gql from 'graphql-tag'

export const loginUser = gql`
    mutation loginUser($password: String!, $email: String!) {
        loginUser(password: $password, email: $email) {
            accessToken
        }
    }
`
