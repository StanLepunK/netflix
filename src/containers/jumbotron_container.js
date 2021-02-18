import React from 'react';

// classic import
// import Jumbotron from '../components/jumbotron/Jumbotron';

// use master.js to call compoents
import { Jumbotron } from '../components/master.js';
import { MEDIA_PATH } from '../constants/constants.js';

import jumbo_data from '../fixtures/jumbo.json';

export function JumbotronContainer() {
  // let path = `https://raw.githubusercontent.com/StanLepunK/netflix/master`;
  return (
    <Jumbotron.Container>
      {jumbo_data.map((elem) => (
        <Jumbotron key={elem.id} direction={elem.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{elem.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{elem.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image
              src={`${MEDIA_PATH}${elem.path_img}`}
              alt={elem.alt}
            />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
