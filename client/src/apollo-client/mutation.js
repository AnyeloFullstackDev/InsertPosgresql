import { gql } from '@apollo/client'

export const CREATE_PERSON = gql`
  mutation CreatePerson($name: String!, $lastName: String!, $ci: String!, $city: String!) {
    createPerson(name: $name, lastName: $lastName, ci: $ci, city: $city) {
      id
      name
      lastName
      ci
      city
    }
  }
`;