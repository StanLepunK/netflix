import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  Item,
  Inner,
  Title,
  Subtitle,
  Image,
  Pane,
} from './styles/jumbotron_style';

Jumbotron.propTypes = {
  children: PropTypes.object,
  direction: PropTypes.string,
  rest_props: PropTypes.object,
};

export default function Jumbotron({ children, direction = 'row', rest_props }) {
  return (
    <Item {...rest_props}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

// eslint-disable-next-line react/prop-types
Jumbotron.Container = function JumbotronContainer({ children, ...rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
};

// eslint-disable-next-line react/prop-types
Jumbotron.Title = function JumbotronTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...rest_props }) {
  return <Subtitle {...rest_props}>{children}</Subtitle>;
};

// eslint-disable-next-line react/prop-types
Jumbotron.Image = function JumbotronImage({ ...rest_props }) {
  return <Image {...rest_props} />;
};

// eslint-disable-next-line react/prop-types
Jumbotron.Pane = function JumbotronPane({ ...rest_props }) {
  return <Pane {...rest_props} />;
};
