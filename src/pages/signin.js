import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/context_firebase';

import * as ROUTES from '../constants/routes_constants';

import { Form } from '../components/h';
import { HeaderContainer } from '../containers/header_container';
import { FooterContainer } from '../containers/footer_container';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [error, set_error] = useState('');
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const isInvalid = (password === '') | (email === '');

  // https://firebase.google.com/docs/auth/web/password-auth
  const signin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        set_email('');
        set_password('');
        set_error(error.message);
      });
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
