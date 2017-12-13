// @flow
import * as React from 'react';
import 'normalize.css';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Header, Footer } from '../components';

import { THEME } from '../style';

import { rhythm, scale } from '../utils/typography';

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4)
};

interface Props {}
interface State {}

class DefaultLayout extends React.Component<Props, State> {
  render() {
    const isHome = this.props.location.pathname === '/';
    return (
      <ThemeProvider theme={THEME}>
        <div>
          <Header isHome={isHome} links={['about', 'contact', 'posts']} />
          <div css={containerStyle}>{this.props.children()}</div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired
};

export default DefaultLayout;

injectGlobal({
  '.gallery-row': {
    display: 'flex'
  },
  '.tiled-gallery': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem 0',
    overflow: 'hidden'
  }
});
