import React from 'react';
import {
  Container,
  Row,
  Col,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer_style';

import PropTypes from 'prop-types';

Footer.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function Footer({ children, rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
Footer.Row = function FooterRow({ children, ...rest_props }) {
  return <Row {...rest_props}>{children}</Row>;
};

// eslint-disable-next-line react/prop-types
Footer.Col = function FooterCol({ children, ...rest_props }) {
  return <Col {...rest_props}>{children}</Col>;
};

// eslint-disable-next-line react/prop-types
Footer.Link = function FooterLink({ children, ...rest_props }) {
  return <Link {...rest_props}>{children}</Link>;
};

// eslint-disable-next-line react/prop-types
Footer.Title = function FooterTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Footer.Text = function FooterText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};

// eslint-disable-next-line react/prop-types
Footer.Break = function FooterBreak({ ...rest_props }) {
  return <Break {...rest_props} />;
};
