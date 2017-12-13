// @flow
import * as React from 'react';
import styled from 'react-emotion';
import GatsbyLink from 'gatsby-link';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const Footer = styled.footer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '15vh',
  width: '100%',
  backgroundColor: 'black'
});

const FooterContents = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%'
});

const Link = styled(GatsbyLink)({
  color: 'inherit',
  textDecoration: 'none'
});

const styledIcon = Component => styled(Component)({
  color: '#CCC',
  height: 32,
  width: 32,
  transition: '175ms ease-in-out',
  ':hover': {
    color: '#FFF',
    transform: 'scale(1.1)'
  }
});

const Social = styled.div({
  display: 'flex'
});

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0
});

const ListItem = styled.li({
  color: 'white',
  margin: 0,
  padding: 0,
  listStyleType: 'none'
});

const Seperator = styled.hr({
  backgroundColor: 'white',
  border: 'none',
  outline: 'none',
  width: '80%',
  height: 1
});

const Copyright = styled.p({
  margin: 0,
  padding: 0,
  color: 'white'
});

const LinkedList = ({ items, title }) => (
  <List>
    <ListItem>{title}</ListItem>
    {
      items.map(item => <ListItem key={item}><Link to={item.to}>{item.text}</Link></ListItem>)
    }
  </List>
);

function FooterComponent(props: Props) {
  const Facebook = styledIcon(FacebookIcon);
  const current = new Date().getFullYear();
  return (
    <Container>
      <Footer>
        <FooterContents>
          <LinkedList title="Posts" items={[
            {
              to: '/services',
              text: 'Services'
            }
          ]}/>
          <LinkedList title="Pages" items={[
            {
              to: '/services',
              text: 'Services'
            }
          ]}/>
          <Social>
            <Link to="https://www.facebook.com/pg/schaurecycling/about/" target="_blank" rel="noopener"><Facebook /></Link>
          </Social>
        </FooterContents>
        <Seperator />
        <Copyright>&copy; 2007&ndash;{current} Schau Recycling, LLC</Copyright>
      </Footer>
    </Container>
  );
}

export { FooterComponent as Footer }
