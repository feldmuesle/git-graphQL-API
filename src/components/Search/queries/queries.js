import { gql } from 'apollo-boost';

const GET_USER = gql`
  query submit($login: String!, $cursor: String) {
    user(login: $login) {
      bio
      avatarUrl
      email
      createdAt
      isHireable
      login
      name
      location
      repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}, after: $cursor) {
        nodes {
          createdAt
          name
          id
          url
          description
          primaryLanguage {
            color
            name
          }
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      websiteUrl
      url
    }
  }
`

export default {
  GET_USER
}
