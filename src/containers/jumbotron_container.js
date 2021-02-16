import React from 'react';

import Jumbotron from '../components/jumbotron';
import jumbo_data from '../fixtures/jumbo.json';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbo_data.map((elem) => (
        <Jumbotron key={elem.id} direction={elem.direction}>
          <Jumbotron.Title>{elem.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{elem.subTitle}</Jumbotron.SubTitle>
          <Jumbotron.Image src={elem.path_img} alt={elem.alt} />
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
