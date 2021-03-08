import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/context_firebase';

import * as ROUTES from '../constants/routes_constants';

import { HeaderContainer } from '../containers/header_container';
import { FooterContainer } from '../containers/footer_container';

import { Form } from '../components/h';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

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

  // https://firebase.google.com/docs/auth/web/password-auth
  const signup = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: pseudo,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            console.log('result.user', result.user);
            history.push(ROUTES.BROWSE);
          })
      )
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
