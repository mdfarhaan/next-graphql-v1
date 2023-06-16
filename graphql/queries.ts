import { gql } from "@apollo/client";

export const getChracters = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        name
        origin {
          name
        }
        location {
          name
        }
        status
      }
    }
  }
`;
