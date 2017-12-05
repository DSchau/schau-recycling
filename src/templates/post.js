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
    const post = this.props.data.wordpressPost

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {post.acf &&
          post.acf.page_builder_post &&
          post.acf.page_builder_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_image_gallery`) {
              return (
                <div key={`${i} image-gallery`}>
                  <h2>ACF Image Gallery</h2>
                  {layout.pictures.map(({ picture }) => {
                    const img = picture.localFile.childImageSharp.sizes
                    return (
                      <Image
                        key={img.src}
                        sizes={img}
                      />
                    )
                  })}
                </div>
              )
            }
            if (layout.__typename === `WordPressAcf_post_photo`) {
              const img = layout.photo.localFile.childImageSharp.sizes
              return (
                <div key={`${i}-photo`}>
                  <h2>ACF Post Photo</h2>
                  <Image
                    src={img.src}
                    sizes={img}
                  />
                </div>
              )
            }
            return null
          })}
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      id
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`