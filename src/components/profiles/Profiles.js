import React from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import {
  Container,
  Title,
  List,
  Item,
  Picture,
  Name,
} from './styles/profiles_style';

import PropTypes from 'prop-types';

Profiles.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function Profiles({ children, rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
Profiles.Title = function ProfilesTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Profiles.List = function ProfilesList({ children, ...rest_props }) {
  return <List {...rest_props}>{children}</List>;
};

// eslint-disable-next-line react/prop-types
Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

// eslint-disable-next-line react/prop-types
Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={
        src
          ? `${MEDIA_PATH}/images/users/${src}.png`
          : `${MEDIA_PATH}/images/misc/loading.gif`
      }
    />
  );
};

// eslint-disable-next-line react/prop-types
Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
