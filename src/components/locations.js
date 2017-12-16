// @flow
import * as React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import denisonSrc from './images/denison.jpeg';
import idaGroveSrc from './images/ida-grove.jpeg';

const Row = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '@media only screen and (min-width: 768px)': {
    flexDirection: 'row'
  }
});

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none'
});

const ImageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  overflow: 'hidden'
});

const Name = styled.h1({
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  margin: '0 auto',
  padding: 0,
  fontSize: 40,
  textAlign: 'center',
  textTransform: 'uppercase',
  pointerEvents: 'none'
});

const Address = styled.ul({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  margin: '0 auto',
  fontSize: 24,
  textAlign: 'center',
  pointerEvents: 'none'
});

const AddressItem = styled.li({
  display: 'block',
  listStyleType: 'none'
});

const Image = styled.img({
  margin: 0,
  padding: 0,
  filter: 'brightness(25%)',
  transition: '175ms ease-in-out',
  transform: 'scale(1)',
  ':hover': {
    filter: 'brightness(100%)',
    transform: 'scale(1.1)'
  }
});

export function Locations(props) {
  return (
    <Row>
      <StyledLink to="/ida-grove">
        <ImageContainer>
          <Image src={idaGroveSrc} />
          <Name>Ida Grove</Name>
          <Address>
            <AddressItem>5936 260th Street</AddressItem>
            <AddressItem>Ida Grove, IA 51445</AddressItem>
            <AddressItem>712.364.3550</AddressItem>
          </Address>
        </ImageContainer>
      </StyledLink>
      <StyledLink to="/denison">
        <ImageContainer>
          <Image src={denisonSrc} />
          <Name>Denison</Name>
          <Address>
            <AddressItem>325 Avenue C</AddressItem>
            <AddressItem>Denison, IA</AddressItem>
            <AddressItem>712.263.6336</AddressItem>
          </Address>
        </ImageContainer>
      </StyledLink>
    </Row>
  );
}
