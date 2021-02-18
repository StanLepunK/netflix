import React from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import { useState } from 'react';
import { useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Body,
  Title,
  Header,
  Item,
  Frame,
} from './styles/accordion_style';

import PropTypes from 'prop-types';

Accordion.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

const ToggleContext = createContext();

export default function Accordion({ children, rest_props }) {
  return (
    <Container {...rest_props}>
      <Inner>{children}</Inner>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
Accordion.Title = function AccordionTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Accordion.Frame = function AccordionFrame({ children, ...rest_props }) {
  return <Frame {...rest_props}>{children}</Frame>;
};

// eslint-disable-next-line react/prop-types
Accordion.Item = function AccordionItem({ children, ...rest_props }) {
  // here we create and pass an array it's why we use []
  const [toggle_show, set_toggle_show] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle_show, set_toggle_show }}>
      <Item {...rest_props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
Accordion.Header = function AccordionHeader({ children, ...rest_props }) {
  // here we catch an object it's why we use {}
  const { toggle_show, set_toggle_show } = useContext(ToggleContext);

  function switch_toggle() {
    toggle_show ? set_toggle_show(false) : set_toggle_show(true);
  }
  return (
    <Header {...rest_props} onClick={switch_toggle}>
      {children}
      {toggle_show ? (
        <img src={`${MEDIA_PATH}/images/icons/close-slim.png`} alt="Close" />
      ) : (
        <img src={`${MEDIA_PATH}/images/icons/add.png`} alt="Open" />
      )}
    </Header>
  );
};

// eslint-disable-next-line react/prop-types
Accordion.Body = function AccordionBody({ children, ...rest_props }) {
  // here we catch an object it's why we use {}
  const { toggle_show } = useContext(ToggleContext);
  if (toggle_show) return <Body {...rest_props}>{children}</Body>;
  else return null;
};
