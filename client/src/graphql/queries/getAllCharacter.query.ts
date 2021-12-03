import gql from 'graphql-tag'

export const GET_ALL_CHARACTER_NAMES = gql`
    query getAllCharacters {
        characters {
            results {
                id
                name
                status
                species
                image
            }
        }
    }
`
