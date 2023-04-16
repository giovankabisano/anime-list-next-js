import { gql } from "@apollo/client";

export default gql`
  query MEDIA(
    $page: Int!,
  ) {
    Page(page: $page, perPage: 50) {
      media {
        id
        title {
          userPreferred
        }
        seasonYear
        bannerImage
        isFavourite
      }
    }
  }
`
