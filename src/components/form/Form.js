import React from 'react';
import {
  Container,
  Title,
  Link,
  Input,
  Base,
  Submit,
  Error,
  Text,
  TextSmall,
} from './styles/form_style';

import PropTypes from 'prop-types';

Form.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
};

export default function Form({ children, rest_props }) {
  return <Container {...rest_props}>{children}</Container>;
}

// eslint-disable-next-line react/prop-types
Form.Title = function FormTitle({ children, ...rest_props }) {
  return <Title {...rest_props}>{children}</Title>;
};

// eslint-disable-next-line react/prop-types
Form.Text = function FormText({ children, ...rest_props }) {
  return <Text {...rest_props}>{children}</Text>;
};

// eslint-disable-next-line react/prop-types
Form.TextSmall = function FormTextSmall({ children, ...rest_props }) {
  return <TextSmall {...rest_props}>{children}</TextSmall>;
};

// eslint-disable-next-line react/prop-types
Form.Link = function FormLink({ children, ...rest_props }) {
  return <Link {...rest_props}>{children}</Link>;
};

// eslint-disable-next-line react/prop-types
Form.Input = function FormInput({ children, ...rest_props }) {
  return <Input {...rest_props}>{children}</Input>;
};

// eslint-disable-next-line react/prop-types
Form.Error = function FormError({ children, ...rest_props }) {
  return <Error {...rest_props}>{children}</Error>;
};

// eslint-disable-next-line react/prop-types
Form.Submit = function FormSubmit({ children, ...rest_props }) {
  return <Submit {...rest_props}>{children}</Submit>;
};

// eslint-disable-next-line react/prop-types
Form.Base = function FormSBase({ children, ...rest_props }) {
  return <Base {...rest_props}>{children}</Base>;
};
