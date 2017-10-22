import * as React from 'react';
import styled from 'react-emotion';
import logo from './images/logo.svg';

import { THEME } from '../../style';

const Container = styled('div')`
  background-color: ${THEME.base};
  min-height: 200px;
`;
const Image = styled('img')``;

interface Props {}

export function SubHeader(props: Props) {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
}
