import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('main')`
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
`;

interface Props {
  content: () => React.ReactChildren;
}

export function Content(props: Props) {
  return (
    <Container>
      {props.content()}
    </Container>
  );
}
