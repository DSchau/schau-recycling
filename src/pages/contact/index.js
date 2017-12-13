// @flow
import * as React from 'react';
import styled from 'react-emotion';
import { Form as FinalForm, Field } from 'react-final-form';

import { submit, validate } from './util';

import { Textarea as AutosizedTextarea } from '../../components';
import { SERIF } from '../../style';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const Title = styled.h1({
  fontSize: 22,
  color: '#999'
});

const Message = styled.p({});

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const Row = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@media only screen and (min-width: 768px)': {
    flexDirection: 'row'
  }
});

const Label = styled.label({
  display: 'block',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: '1rem',
  width: '100%',
  ...SERIF
});

const Input = styled.input({
  display: 'block',
  width: '100%',
  border: '1px solid #EEE',
  padding: '0.5rem'
}, ({ theme }) => ({
  ':focus': {
    borderColor: theme.backgroundColor
  }
}));

const Textarea = styled(AutosizedTextarea)({
  display: 'block',
  width: '100%',
  border: '1px solid #EEE',
  padding: '0.5rem'
});

const ErrorMessage = styled.span({
  color: 'red',
  fontSize: 12,
  textTransform: 'uppercase'
});

const ButtonContainer = styled.div({
  display: 'flex'
});

const Button = styled.button(
  {
    border: 'none',
    color: 'white',
    fontSize: 22,
    padding: '1rem 0.5rem',
    width: '100%',
    transition: '125ms background-color ease-in-out'
  },
  ({ disabled, theme }) => ({
    backgroundColor: disabled ? '#CCC' : theme.base
  })
);

const SecondaryButton = styled(Button)({
  backgroundColor: 'grey'
});

interface Props {}

export default function Contact(props: Props) {
  return (
    <Container>
      <Title>Contact the Team</Title>
      <Message>
        Want to get in touch? You can use the below form to get in touch with
        us. We try to respond to any inquiries within two days. Thank you!
      </Message>
      <FinalForm
        onSubmit={submit}
        validate={validate}
        render={({
          handleSubmit,
          initialize,
          reset,
          pristine,
          invalid,
          submitting
        }) => (
          <Form
            onSubmit={event => {
              event.preventDefault();
              handleSubmit(event);
            }}
          >
            <Row>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <Label for="name">
                    Name
                    <Input id="name" name="name" {...input} />
                    {meta.error &&
                      meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Label>
                )}
              />
              <Field
                name="email"
                render={({ input, meta }) => (
                  <Label for="email">
                    Email
                    <Input id="email" name="email" {...input} />
                    {meta.error &&
                      meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Label>
                )}
              />
            </Row>
            <Field
              name="message"
              render={({ input, meta }) => (
                <Label for="message">
                  Message
                  <Textarea id="message" name="message" {...input} />
                  {meta.error &&
                    meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                </Label>
              )}
            />
            <ButtonContainer>
              <SecondaryButton
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </SecondaryButton>
              <Button type="submit" disabled={pristine || invalid}>
                Send
              </Button>
            </ButtonContainer>
          </Form>
        )}
      />
    </Container>
  );
}
