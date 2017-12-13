// @flow
import * as React from 'react';

interface Props {}

export default function News(props: Props) {
  return (
    null
  );
}

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;