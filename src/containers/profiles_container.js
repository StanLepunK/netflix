import React from 'react';
import { Header, Profiles } from '../components/h';
import * as ROUTES from '../constants/routes_constants';
import { MEDIA_PATH } from '../constants/constants.js';

import PropTypes from 'prop-types';

SelectProfileContainer.propTypes = {
  user: PropTypes.object,
  set_profile: PropTypes.object,
};

export function SelectProfileContainer({ user, set_profile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src={`${MEDIA_PATH}/images/misc/logo_blanc.svg`}
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>
          Big Brother is watching you, but who&apos;s next ?
        </Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              set_profile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
