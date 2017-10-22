import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Content, Footer, Header, SubHeader } from '../components';

import 'normalize.css';
import './index.css';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface Props {
  children(): React.ReactChildren;
}

const TemplateWrapper = ({ children }: Props) => (
  <Container>
    <Helmet
      title="Schau Recycling"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Content content={children} />
    <Footer />
  </Container>
);

export default TemplateWrapper;
