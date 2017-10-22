import * as React from 'react';
import styled from 'react-emotion';

import { LARGE_UP, THEME } from '../../style';

const FooterContainer = styled('footer')`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100px;
  width: 100%;
  padding: 0.5rem;
  background-color: ${THEME.secondary};
  ${LARGE_UP`
    flex-direction: row;
  `};
`;

const Copyright = styled('p')`
  margin: 0;
  padding: 0;
  font-size: 16px;
  white-space: nowrap;
`;

const List = styled('ul')`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ListItem = styled('li')`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

interface Props {}

interface State {
  year: number;
}

export class Footer extends React.Component<Props, State> {
  componentWillMount() {
    this.setState({
      year: new Date().getFullYear()
    });
  }

  render() {
    return (
      <FooterContainer>
        <List>
          <ListItem>Ida Grove, IA</ListItem>
          <ListItem>5936 260th St.</ListItem>
          <ListItem>712.360.3550</ListItem>
        </List>
        <List>
          <ListItem>Denison, IA</ListItem>
          <ListItem>325 Avenue C</ListItem>
          <ListItem>712.263.6336</ListItem>
        </List>
        <Copyright>&copy; {this.state.year} Schau Recycling, LLC</Copyright>
      </FooterContainer>
    );
  }
}