import * as React from 'react';
import styled from 'react-emotion';

import { THEME } from '../../style';
import logo from './images/logo.svg';

const Header = styled('header')`
  min-height: 100px;
  background-color: ${THEME.header};
`;

const Title = styled('h1')`
  margin: 0;
  padding: 0;
  color: ${THEME.text};
`;

const HiddenTitle = styled('span')`
  display: none;
`;

const SubTitle = styled('h2')`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: ${THEME.text};
`;

interface Props {}

function HeaderContainer(props: Props) {
  return (
    <Header>
      <Title>
        <HiddenTitle>S</HiddenTitle>
        <img src={logo} />chau Recycling
      </Title>
      <SubTitle>Scrap is our Business</SubTitle>
    </Header>
  );
}

export { HeaderContainer as Header };
