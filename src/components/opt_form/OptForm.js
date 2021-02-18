import React from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import { Container, Input, Button, Text } from './styles/opt_form_style';

import PropTypes from 'prop-types';

OptForm.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function OptForm({ children, ...rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
OptForm.Input = function OptFormInput({ children, ...rest_props }) {
  return <Input {...rest_props} />;
};

// eslint-disable-next-line react/prop-types
OptForm.Button = function OptFormButton({ children, ...rest_props }) {
  return (
    <Button {...rest_props}>
      {children}{' '}
      <img src={`${MEDIA_PATH}/images/icons/chevron-right.png`} alt="Try Now" />
    </Button>
  );
};

// eslint-disable-next-line react/prop-types
OptForm.Text = function OptFormText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};
