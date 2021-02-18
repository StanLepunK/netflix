import React from 'react';

import { Accordion, OptForm } from '../components/master.js';
import faq_data from '../fixtures/faqs.json';

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faq_data.map((elem) => (
          <Accordion.Item key={elem.id}>
            <Accordion.Header>{elem.header}</Accordion.Header>
            <Accordion.Body>{elem.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
