import React, { useState } from 'react';
import { Header } from '../components/h';
import * as ROUTES from '../constants/routes_constants';
import { FirebaseContext } from '../context/context_firebase';
import { SelectProfileContainer } from './profiles_container';
import { FooterContainer } from './footer_container';

export function BrowseContainer() {
  const [profile, setProfile] = useState({});

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
    <SelectProfileContainer />
  );
}
