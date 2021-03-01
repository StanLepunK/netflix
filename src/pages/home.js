import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron_container';
import { FooterContainer } from '../containers/footer_container';
import { FaqContainer } from '../containers/faq_container';
import { HeaderContainer } from '../containers/header_container';

import { Feature, OptForm } from '../components/h.js';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <OptForm>
            <Feature.Title>
              Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.Subtitle>
              Watch anywhere. Cancel at any time.
            </Feature.Subtitle>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
