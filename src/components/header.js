// @flow
import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import { rhythm, scale } from "../utils/typography"

const Container = styled.header({
  background: `rgb(207, 58, 62)`,
  marginBottom: rhythm(1),
  padding: `${rhythm(1)} 0px`,
  "@media screen and (min-width: 500px)": {
    padding: `${rhythm(2)} 0px`,
  }
}, ({ theme }) => ({
  backgroundColor: theme.base
}));

const TitleContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
});

const Title = styled(Link)({
  padding: 0,
  color: 'white',
  textDecoration: 'none',
  textTransform: 'uppercase',
  margin: 0,
  fontSize: scale(1.5).fontSize,
  fontWeight: 'bold',
  lineHeight: 1,
  "@media screen and (min-width: 500px)": {
    fontSize: scale(1.9).fontSize,
    lineHeight: 1,
  },
});

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <Title to="/">Schau Recycling</Title>
      </TitleContainer>
    </Container>
  );
}
