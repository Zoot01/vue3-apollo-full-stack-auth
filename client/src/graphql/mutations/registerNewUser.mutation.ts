import gql from 'graphql-tag'

export const registerNewUserMutation = gql`
    mutation registerNewUserMutation($user: UserInput!) {
        registerUser(user: $user) {
            id
            email
        }
    }
`
