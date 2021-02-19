import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Logo, Background, ButtonLink } from './styles/header_style';

import PropTypes from 'prop-types';

Header.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
  bg: PropTypes.bool,
};

export default function Header({ bg = true, children, rest_props }) {
  return bg ? <Background {...rest_props}>{children}</Background> : children;
}

// eslint-disable-next-line react/prop-types
Header.Frame = function HeaderFrame({ children, ...rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
};

// eslint-disable-next-line react/prop-types
Header.Logo = function HeaderLogo({ to, children, ...rest_props }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...rest_props} />
    </ReachRouterLink>
  );
};

// eslint-disable-next-line react/prop-types
Header.ButtonLink = function HeaderButtonLink({ children, ...rest_props }) {
  return <ButtonLink {...rest_props}>{children}</ButtonLink>;
};
