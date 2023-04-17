import { gql } from "@apollo/client";

export default gql`
  query MEDIA_DETAIL(
    $id: Int,
  ) {
    Media(
      id: $id
    ) {
      bannerImage
      title {
        userPreferred
      }
      description
      genres
      meanScore
    }
  }
`
