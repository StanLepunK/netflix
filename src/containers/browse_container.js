import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';

import { Card, Loading, Header, Player } from '../components/h';
import * as ROUTES from '../constants/routes_constants';

import { FirebaseContext } from '../context/context_firebase';

import { SelectProfileContainer } from './profiles_container';
import { FooterContainer } from './footer_container';
import { MEDIA_PATH } from '../constants/constants.js';

Diapo.propTypes = {
  slide_elem: PropTypes.object,
  category: PropTypes.string,
};

function Diapo({ slide_elem, category }) {
  // console.log('slide_elem', slide_elem);
  if (slide_elem !== undefined) {
    return (
      <Card key={`${category}-${slide_elem.title.toLowerCase()}`}>
        <Card.Title>{slide_elem.title}</Card.Title>
        <Card.Entities>
          {slide_elem.data.map((elem) => (
            <Card.Item key={elem.docId} item={elem}>
              <Card.Image
                src={`${MEDIA_PATH}/images/${category}/${elem.genre}/${elem.slug}/small.jpg`}
              />
              <Card.Meta>
                <Card.Subtitle>{elem.title}</Card.Subtitle>
                <Card.Text>{elem.description}</Card.Text>
              </Card.Meta>
            </Card.Item>
          ))}
        </Card.Entities>
        <Card.Feature category={category}>
          <Player>
            <Player.Button />
            <Player.Video />
          </Player>
        </Card.Feature>
      </Card>
    );
  } else {
    //console.log("c'est null");
    return null;
  }
}

Diaporama.propTypes = {
  slide_rows: PropTypes.object,
  category: PropTypes.string,
};
function Diaporama({ slide_rows, category }) {
  return (
    <Card.Group>
      {slide_rows.map((slide_elem, index) => (
        <Diapo key={index} slide_elem={slide_elem} category={category} />
      ))}
      ;
    </Card.Group>
  );
}

BrowseContainer.propTypes = {
  slides: PropTypes.object,
};
export function BrowseContainer({ slides }) {
  const [category, set_category] = useState('series');
  const [profile, set_profile] = useState({});
  const [loading, set_loading] = useState(true);
  const [search_term, set_search_term] = useState('');
  const [slide_rows, set_slide_rows] = useState([]);

  const user = {
    displayName: 'Stan',
    photoURL: '1',
  };

  useEffect(() => {
    setTimeout(() => {
      set_loading(false);
    }, 3000);
  }, [user]);

  useEffect(() => {
    set_slide_rows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slide_rows, {
      // where from this data variable ????
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(search_term).map(({ elem }) => elem);

    if (slide_rows.length > 0 && search_term.length > 3 && results.length > 0) {
      set_slide_rows(results);
      console.log('results', results);
    } else {
      set_slide_rows(slides[category]);
    }
  }, [search_term]);
  // search a good term but don't work and return undefined array content.

  console.log('search_term', search_term);
  console.log('slide_rows', slide_rows);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
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
          <Header.Group>
            <Header.Search
              search_term={search_term}
              set_search_term={set_search_term}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
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
      {/* {slide_rows === "undefined"} */}
      <Diaporama slide_rows={slide_rows} category={category} />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} set_profile={set_profile} />
  );
}
