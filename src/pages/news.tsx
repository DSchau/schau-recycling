import * as React from 'react';

import { BaseProps } from '../interfaces';

interface Props {}

export default function News(props: BaseProps & Props) {
  console.log(props);
  return <h1>Sup</h1>;
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            draft
            excerpt
            path
            tags
            title
          }
        }
      }
    }
  }
`;
