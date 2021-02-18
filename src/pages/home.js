import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron_container';
import { FooterContainer } from '../containers/footer_container';
import { FaqContainer } from '../containers/faq_container';
import { HeaderContainer } from '../containers/header_container';

export default function Home() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
