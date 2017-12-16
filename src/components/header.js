// @flow
import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'react-emotion';

import logoSrc from './images/logo.svg';

import { rhythm, scale } from '../utils/typography';
import { SANS_SERIF } from '../style';

const Container = styled.div();

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}, ({ theme }) => ({
  backgroundColor: theme.base
}));

const Byline = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '35vh'
}, ({ theme }) => ({
  backgroundColor: theme.base
}));

const LinksContainer = styled.ul({
  display: 'flex',
  margin: 0,
  marginLeft: 'auto',
  padding: 0,
});

const Link = styled.li({
  display: 'inline-block',
  listStyleType: 'none',
  color: 'white',
  padding: `0 ${rhythm(1 / 4)}`,
  margin: 0,
  ...SANS_SERIF
});

const StyledLink = styled(GatsbyLink)({
  color: 'inherit',
  textDecoration: 'none',
  padding: `${rhythm(1/2)} ${rhythm(1/4)}`,
  marginLeft: 14,
  marginRight: 14,
  transition: 'border 175ms ease-in-out',
  ':hover': {
    borderBottom: '2px solid white'
  },
  '&.active': {
    borderBottom: '2px solid white'
  }
}, ({ theme }) => ({
  color: theme.tertiary,
  '&.active': {
    color: 'white',
    fontWeight: 'bold'
  }
}));

const TitleContainer = styled.div({
  padding: rhythm(3 / 4)
});

const Title = styled(GatsbyLink)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  color: 'white',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: scale(0.8).fontSize,
  fontWeight: 'bold',
  lineHeight: 1,
  '@media screen and (min-width: 500px)': {
    fontSize: scale(1).fontSize
  }
});

const Tag = styled.h1({
  color: 'white',
  textTransform: 'uppercase',
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontSize: 32,
  '@media only screen and (min-width: 768px)': {
    fontSize: 60
  }
});

const SubTag = styled.h2(({ theme }) => ({
  color: theme.baseLight,
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontSize: 20,
  '@media only screen and (min-width: 768px)': {
    fontSize: 40
  }
}));

const Logo = styled.img({
  maxHeight: 72,
  marginBottom: 0,
  marginRight: '0.5rem',
  transition: '250ms ease-in-out',
  ':hover': {
    transform: 'scale(1.1)'
  }
});

interface Props {
  isHome: boolean;
  links: any[];
}

function HeaderComponent({ isHome, links }: Props) {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title to="/"><Logo src={logoSrc} /> Schau Recycling</Title>
        </TitleContainer>
        <LinksContainer>
          {links.map(link => (
            <Link key={link}>
              <StyledLink to={`/${link}`} activeClassName="active">{link}</StyledLink>
            </Link>
          ))}
        </LinksContainer>
      </Header>
      {isHome && (
        <Byline>
          <Tag>Scrap is our Business.</Tag>
          <SubTag>Buyers of ferrous and non-ferrous metals.</SubTag>
        </Byline>
      )}
    </Container>
  );
}

export { HeaderComponent as Header }
