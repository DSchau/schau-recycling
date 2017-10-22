import * as React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';
import styled from 'react-emotion';

import { BaseProps } from '../interfaces';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Description = styled('p')`
  margin: 0;
  padding: 0;
`;

interface Props {
  data: {
    file: {
      childImageSharp: {
        resolutions: any[];
      };
    };
  };
}

export default function About(props: BaseProps & Props) {
  console.log(props);
  return (
    <Container>
      <Description>
        Schau Recycling is a family owned business that specializes in recycling
        scrap metal(s) of all kinds. We have been in business over 50 years,
        with offices in Ida Grove and Denison.
      </Description>
      {/*<Image resolutions={props.data.file.childImageSharp.resolutions} />*/}
    </Container>
  );
}

export const query = graphql`
  query ChristmasParty {
    file(relativePath: { eq: "images/christmas-party.jpeg" }) {
      imageSharp {
        resolutions(width: 400) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
