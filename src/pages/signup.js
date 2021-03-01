import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header_container';
import { FooterContainer } from '../containers/footer_container';

import { Form } from '../components/h';
import * as ROUTES from '../constants/routes_constants';

export default function Signup() {
  const [pseudo, set_pseudo] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [confirm_password, set_confirm_password] = useState('');
  const [error, set_error] = useState('');
  const is_invalid =
    pseudo === '' ||
    email === '' ||
    password === '' ||
    password !== confirm_password;

  const signup = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signup} method="POST">
            <Form.Input
              placeholder="Pseudo"
              value={pseudo}
              onChange={({ target }) => set_pseudo(target.value)}
            />
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
            <Form.Input
              placeholder="Confirm password"
              autoComplete="off"
              value={confirm_password}
              onChange={({ target }) => set_confirm_password(target.value)}
            />
            <Form.Submit disabled={is_invalid} type="submit">
              Sign Up
            </Form.Submit>

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
