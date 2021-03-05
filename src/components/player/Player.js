import React, { useState, useContext, createContext } from 'react';
// need to use dom for the vidéo
import ReactDOM from 'react-dom';

import { MEDIA_PATH } from '../../constants/constants.js';
import {
  Container,
  Inner,
  Overlay,
  Button,
  Close,
} from './styles/player_style';

import PropTypes from 'prop-types';

Player.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export const PlayerContext = createContext();

export default function Player({ children, rest_props }) {
  const [show_player, set_show_player] = useState(false);
  return (
    <PlayerContext.Provider value={{ show_player, set_show_player }}>
      <Container {...rest_props}>{children}</Container>
    </PlayerContext.Provider>
  );
}

// eslint-disable-next-line react/prop-types
Player.Video = function PlayrVideo({ ...rest_props }) {
  const { show_player, set_show_player } = useContext(PlayerContext);
  return show_player
    ? ReactDOM.createPortal(
        <Overlay onClick={() => set_show_player(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={`${MEDIA_PATH}/videos/bunny.mp4`} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...rest_props }) {
  const { show_player, set_show_player } = useContext(PlayerContext);

  return <Button onClick={() => set_show_player(!show_player)}>Play</Button>;
};
