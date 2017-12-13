// @flow
import * as React from 'react';
import styled from 'react-emotion';

import { SERIF } from '../style';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const Title = styled.h1({
  fontSize: 22,
  color: '#999'
});

const Message = styled.p({

});

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const Label = styled.label({
  display: 'block',
  fontSize: 20,
  marginBottom: '1rem',
  ...SERIF
});

const Input = styled.input({
  display: 'block',
  width: '100%',
  border: '1px solid #EEE',
  padding: '0.5rem'
});

const Textarea = styled.textarea({
  display: 'block',
  width: '100%',
  border: '1px solid #EEE',
  padding: '0.5rem'
});

const ButtonContainer = styled.div({
  display: 'flex'
});

const Button = styled.button({
  border: 'none',
  color: 'white',
  fontSize: 22,
  padding: '1rem 0.5rem',
  width: '100%'
}, ({ theme}) => ({
  backgroundColor: theme.base
}));

const SecondaryButton = styled(Button)({
  backgroundColor: 'grey'
});

interface Props {}
interface State {}

export default class Contact extends React.Component<Props, State> {
  handleSubmit = ev => {
    ev.preventDefault();
  };

  render() {
    return (
      <Container>
        <Title>Contact the Team</Title>
        <Message>Want to get in touch? You can use the below form to get in touch with us. We try to respond to any inquiries within two days. Thank you!</Message>
        <Form onSubmit={this.handleSubmit}>
          <Label for="name">
            Name
            <Input id="name" name="name" />
          </Label>
          <Label for="email">
            Email
            <Input id="email" name="email" />
          </Label>
          <Label for="message">
            Message
            <Textarea id="message" name="message" />
          </Label>
          <ButtonContainer>
            <SecondaryButton>Reset</SecondaryButton>
            <Button type="submit">Send</Button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }
}
