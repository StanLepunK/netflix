import React from 'react';
import { Container, Title, Subtitle } from './styles/feature_style';

import PropTypes from 'prop-types';

Feature.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function Feature({ children, rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
Feature.Title = function FeatureTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Feature.Subtitle = function FeatureSubtitle({ children, ...rest_props }) {
  return <Subtitle {...rest_props}>{children}</Subtitle>;
};
