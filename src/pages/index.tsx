import * as React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

import { LARGE_UP, THEME } from '../style';
import { FrontmatterNode } from '../interfaces';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Masthead = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: ${THEME.base};
  box-sizing: border-box;
  padding: 1rem;
  ${LARGE_UP`
    flex-direction: row;
  `}
`;

const MastheadItem = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${props => props.width || `auto`};
` as React.StatelessComponent<{
  width?: string;
}>;

const Name = styled('h1')`
  color: white;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`;

const Location = styled('h2')`
  color: white;
  text-align: left;
  margin: 0;
  padding: 0;
  white-space: nowrap;
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: FrontmatterNode;
      }[];
    };
  };
}

export default function Index(props: Props) {
  return (
    <Container>
      <Masthead>
        <MastheadItem>
          <Location>Denison, IA</Location>
          <Location>325 Avenue C</Location>
        </MastheadItem>
        <MastheadItem width={`100%`}>
          <Name>Schau Recycling</Name>
        </MastheadItem>
        <MastheadItem>
          <Location>Denison, IA</Location>
          <Location>5926 260th St.</Location>
        </MastheadItem>
      </Masthead>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
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
            path
            tags
            title
          }
        }
      }
    }
  }
`;
