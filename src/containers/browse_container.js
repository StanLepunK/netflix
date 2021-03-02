import React, { useState, useContext } from 'react';

import { Header } from '../components/h';
import * as ROUTES from '../constants/routes_constants';

import { FirebaseContext } from '../context/context_firebase';

import { SelectProfileContainer } from './profiles_container';
import { FooterContainer } from './footer_container';
import { MEDIA_PATH } from '../constants/constants.js';

export function BrowseContainer() {
  const [profile, set_profile] = useState({});

  const [category, set_category] = useState('series');
  const [loading, set_loading] = useState(true);

  const user = {
    displayName: 'Stan',
    photoURL: '1',
  };
  /**
   *  MUST BE REMOVE
   */
  profile.displayName = true;

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={`${MEDIA_PATH}/images/misc/logo.svg`}
              alt="Netflix"
            />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => set_category('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => set_category('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} set_profile={set_profile} />
  );
}
