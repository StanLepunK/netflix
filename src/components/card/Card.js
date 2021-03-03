import React from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import {
  Container,
  Title,
  Subtitle,
  Meta,
  Text,
  Image,
  Entities,
  Group,
} from './styles/card_style';

import PropTypes from 'prop-types';

Card.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function Card({ children, rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
Card.Title = function CardTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Card.Subtitle = function CardSubtitle({ children, ...rest_props }) {
  return <Subtitle {...rest_props}>{children}</Subtitle>;
};

// eslint-disable-next-line react/prop-types
Card.Text = function CardText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};

// eslint-disable-next-line react/prop-types
Card.Group = function CardGroup({ children, ...rest_props }) {
  return <Group {...rest_props}>{children}</Group>;
};

// eslint-disable-next-line react/prop-types
Card.Image = function CardImage({ children, ...rest_props }) {
  return <Image {...rest_props}>{children}</Image>;
};

// eslint-disable-next-line react/prop-types
Card.Entities = function CardEntities({ children, ...rest_props }) {
  return <Entities {...rest_props}>{children}</Entities>;
};

// eslint-disable-next-line react/prop-types
Card.Meta = function CardMeta({ children, ...rest_props }) {
  return <Meta {...rest_props}>{children}</Meta>;
};
