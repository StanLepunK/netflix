import React, { useState } from 'react';
import { Form } from '../components/h';
import { HeaderContainer } from '../containers/header_container';
import { FooterContainer } from '../containers/footer_container';

export default function Signin() {
  const [error, set_error] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const isInvalid = (password === '') | (email === '');

  const signin = (event) => {
    event.preventDefault();

    // call in here to firebase to authenticate the user
    // if there's an error, populate the error state
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signin} method="POST">
            <Form.Input
              placeholder="Email"
              value={email}
              onChange={({ target }) => set_email(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => set_password(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix ? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
