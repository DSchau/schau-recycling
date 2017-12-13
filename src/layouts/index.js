// @flow
import * as React from "react"
import 'normalize.css';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from "prop-types"
import Link from "gatsby-link"

import { Header } from '../components';

import { THEME } from '../style';

import { rhythm, scale } from "../utils/typography"

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

interface Props {}
interface State {}

class DefaultLayout extends React.Component<Props, State> {
  render() {
    const isHome = this.props.location.pathname === '/';
    return (
      <ThemeProvider theme={THEME}>
        <div>
          <Header isHome={isHome} links={['about', 'contact', 'news']}/>
          <div css={containerStyle}>{this.props.children()}</div>
        </div>
      </ThemeProvider>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DefaultLayout
