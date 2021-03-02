import React, { useState } from 'react';
import { Header } from '../components/h';
import * as ROUTES from '../constants/routes_constants';
import { FirebaseContext } from '../context/context_firebase';
import { SelectProfileContainer } from './profiles_container';
import { FooterContainer } from './footer_container';
import { MEDIA_PATH } from '../constants/constants.js';

export function BrowseContainer() {
  const [profile, set_profile] = useState({});

  // let path = MEDIA_PATH + '/1';
  // console.log('path', path);

  const user = {
    displayName: 'Stan',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <p>Browse Container</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} set_profile={set_profile} />
  );
}
