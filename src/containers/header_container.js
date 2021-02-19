import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../components/master.js';
import * as ROUTES from '../constants/routes_constants.js';
import { MEDIA_PATH } from '../constants/constants.js';

HeaderContainer.propTypes = {
  children: PropTypes.object,
};

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src={`${MEDIA_PATH}/images/misc/logo.svg`}
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
