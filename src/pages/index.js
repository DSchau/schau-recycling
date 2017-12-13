// @flow
import * as React from "react"
import Link from "gatsby-link"
import Image from 'gatsby-image';
import ClockIcon from "react-icons/lib/fa/clock-o"
import TagIcon from "react-icons/lib/fa/tag"
import OpenIcon from "react-icons/lib/fa/folder-open"

import { rhythm } from "../utils/typography"

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
  render() {
    const { data } = this.props;

    const { allWordpressPage: pages, allWordpressPost: posts } = data;

    return (
      <div>
        <div css={{ marginBottom: rhythm(1) }}>
          <h1>Pages</h1>
          {pages.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <span>
                <ClockIcon
                  size={14}
                  css={{ position: `relative`, bottom: 1 }}
                />
                {` `}
                {node.date}
              </span>
            </div>
          ))}
        </div>
        <hr />
        <h1>Posts</h1>
        {posts.edges.map(({ node }) => {
          return (
            <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
              <Link to={`/posts/${node.slug}`} css={{ textDecoration: `none` }}>
              {
                node.featured_media && <Image
                  src={node.featured_media.localFile.childImageSharp.sizes.src}
                  sizes={node.featured_media.localFile.childImageSharp.sizes}
                />
              }

                <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </div>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query indexQuery {
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
`