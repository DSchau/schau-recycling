// @flow
import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Container = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Title = styled(Link)({
  margin: 0,
  padding: 0,
  color: 'white',
  textDecoration: 'none'
});

export function Header() {
  return (
    <Container>
      <Title to="/">Schau Recycling</Title>
    </Container>
  );
}
