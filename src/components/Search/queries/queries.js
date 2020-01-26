import { gql } from 'apollo-boost';

const GET_USER = gql`
  query submit($login: String!) {
    user(login: $login) {
      bio
      avatarUrl
      email
      createdAt
      isHireable
      login
      name
      location
      repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
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
      }
      websiteUrl
      url
    }
  }
`

export default {
  GET_USER
}
