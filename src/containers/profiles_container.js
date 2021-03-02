import React from 'react';
import { Header } from '../components/h';
import * as ROUTES from '../constants/routes_constants';
import { MEDIA_PATH } from '../constants/constants.js';

export function SelectProfileContainer() {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src={`${MEDIA_PATH}/images/misc/logo.svg`}
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
    </>
  );
}
