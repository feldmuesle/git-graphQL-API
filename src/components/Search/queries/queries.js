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
      repositories(first: 10) {
        nodes {
          createdAt
          name
          url
          id
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
