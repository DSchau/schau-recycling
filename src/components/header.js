// @flow
import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'react-emotion';

import { Logo } from './logo';

import { rhythm, scale } from "../utils/typography"

const Container = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `rgb(207, 58, 62)`,
  marginBottom: rhythm(1),
  padding: `${rhythm(1 / 4)} 0px`
}, ({ home, theme }) => ({
  backgroundColor: theme.base,
  ...(home ? {
    minHeight: '50vh'
  } : {})
}));

const LinksContainer = styled.ul({
  margin: 0,
  marginLeft: 'auto',
  padding: 0
});

const Link = styled.li({
  display: 'inline-block',
  listStyleType: 'none',
  color: 'white',
  padding: `0 ${rhythm(1 / 4)}`,
  margin: 0
});

const StyledLink = styled(GatsbyLink)({
  color: 'inherit',
  textDecoration: 'none'
});

const TitleContainer = styled.div({
  padding: rhythm(3 / 4),
});

const Title = styled(GatsbyLink)({
  margin: 0,
  padding: 0,
  color: 'white',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: scale(0.8).fontSize,
  fontWeight: 'bold',
  lineHeight: 1,
  "@media screen and (min-width: 500px)": {
    fontSize: scale(1).fontSize
  },
});

interface Props {
  isHome: boolean;
  links: any[];
}

export function Header({ isHome, links }: Props) {
  return (
    <Container home={isHome} >
      <TitleContainer>
        <Title to="/">Schau Recycling</Title>
        {/*<Logo />*/}
      </TitleContainer>
      <LinksContainer>
        {
          links
            .map(link => <Link key={link}><StyledLink to={`/${link}`}>{link}</StyledLink></Link>)
        }
      </LinksContainer>
    </Container>
  );
}
