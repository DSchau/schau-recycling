// @flow
import * as React from 'react';
import styled from 'react-emotion';
import autosize from 'autosize';

const StyledTextarea = styled.textarea({
  resize: 'none'
});

interface Props {}
interface State {}

export class Textarea extends React.Component<Props, State> {
  componentDidMount() {
    autosize(this.textArea);
  }

  componentWillUnmount() {
    autosize.destroy(this.textArea);
  }

  render() {
    const props = this.props;
    return (
      <StyledTextarea innerRef={node => this.textArea = node} {...props} />
    );
  }
}
