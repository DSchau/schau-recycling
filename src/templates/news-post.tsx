import * as React from 'react';

import { BaseProps } from '../interfaces';

interface Props {}

export default function Post(props: BaseProps & Props) {
  console.log(props);
  return <h1>Sup</h1>;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
