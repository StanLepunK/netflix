import React from 'react';

// classic import
// import Footer from '../components/footer/Footer';

// use master.js to call compoents
import { Footer } from '../components/h.js';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Any questions about footer-ball ?</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Col>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Relations</Footer.Link>
          <Footer.Link href="#">Term of Use</Footer.Link>
          <Footer.Link href="#">Policy</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Col>

        <Footer.Col>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Information</Footer.Link>
        </Footer.Col>

        <Footer.Col>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Preferences</Footer.Link>
          <Footer.Link href="#">Other</Footer.Link>
        </Footer.Col>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Europe</Footer.Text>
    </Footer>
  );
}
