import React from 'react';

import Jumbotron from '../components/jumbotron';
import jumbo_data from '../fixtures/jumbo.json';

export function JumbotronContainer() {
  let path = `https://raw.githubusercontent.com/StanLepunK/netflix/master`;
  return (
    <Jumbotron.Container>
      {jumbo_data.map((elem) => (
        <Jumbotron key={elem.id} direction={elem.direction}>
          <Jumbotron.Title>{elem.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{elem.subTitle}</Jumbotron.SubTitle>
          {/* {`mode${modeNumber}`} */}
          <Jumbotron.Image src={`${path}${elem.path_img}`} alt={elem.alt} />
          {/* <Jumbotron.Image src=`{${{path}}${elem.path_img}` alt={elem.alt} /> */}
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
