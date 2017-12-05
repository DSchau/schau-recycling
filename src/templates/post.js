// @flow
import * as React from "react"
import Image from "gatsby-image"

interface Props {
  data: {
    wordpressPost: {
      title: string;
      content: string;
      acf: any;
    }
  }
}

interface State {}

class PostTemplate extends React.Component<Props, State> {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }

    wordpressPost(id: { eq: $id }) {
      title
      content
      id
    }
  }
`