import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { MEDIA_PATH } from '../../constants/constants.js';
import {
  Container,
  Logo,
  Background,
  ButtonLink,
  Text,
  Link,
  Group,
  Feature,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Profile,
  Dropdown,
} from './styles/header_style';

import PropTypes from 'prop-types';

Header.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
  bg: PropTypes.bool,
};

export default function Header({ bg = true, children, ...rest_props }) {
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

// eslint-disable-next-line react/prop-types
Header.Text = function HeaderText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};

// eslint-disable-next-line react/prop-types
Header.Link = function HeaderLink({ children, ...rest_props }) {
  return <Link {...rest_props}>{children}</Link>;
};

// eslint-disable-next-line react/prop-types
Header.Group = function HeaderGroup({ children, ...rest_props }) {
  return <Group {...rest_props}>{children}</Group>;
};

// eslint-disable-next-line react/prop-types
Header.Feature = function HeaderFeature({ children, ...rest_props }) {
  return <Feature {...rest_props}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  // eslint-disable-next-line react/prop-types
  children,
  ...rest_props
}) {
  return <FeatureCallOut {...rest_props}>{children}</FeatureCallOut>;
};

// eslint-disable-next-line react/prop-types
Header.PlayButton = function HeaderPlayButton({ children, ...rest_props }) {
  return <PlayButton {...rest_props}>{children}</PlayButton>;
};

Header.Search = function HeaderSearch({
  // eslint-disable-next-line react/prop-types
  search_term,
  // eslint-disable-next-line react/prop-types
  set_search_term,
  ...rest_props
}) {
  const [search_active, set_search_active] = useState(false);

  return (
    <Search {...rest_props}>
      <SearchIcon onClick={() => set_search_active(!search_active)}>
        <img src={`${MEDIA_PATH}/images/icons/search.png`} alt="Search" />
      </SearchIcon>
      <SearchInput
        value={search_term}
        onChange={({ target }) => set_search_term(target.value)}
        placeholder="Search files and series"
        active={search_active}
      />
    </Search>
  );
};

// eslint-disable-next-line react/prop-types
Header.Picture = function HeaderPicture({ src, ...rest_props }) {
  return (
    <Picture {...rest_props} src={`${MEDIA_PATH}/images/users/${src}.png`} />
  );
};

// eslint-disable-next-line react/prop-types
Header.Dropdown = function HeaderDropdown({ children, ...rest_props }) {
  return <Dropdown {...rest_props}>{children}</Dropdown>;
};

// eslint-disable-next-line react/prop-types
Header.Profile = function HeaderProfile({ children, ...rest_props }) {
  return <Profile {...rest_props}>{children}</Profile>;
};
