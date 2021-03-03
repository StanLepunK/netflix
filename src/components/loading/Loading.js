import React from 'react';
import { MEDIA_PATH } from '../../constants/constants.js';
import {
  LockBody,
  ReleaseBody,
  Spinner,
  Picture,
} from './styles/loading_style';

import PropTypes from 'prop-types';

Loading.propTypes = {
  src: PropTypes.string,
  rest_props: PropTypes.object,
};

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`${MEDIA_PATH}/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
