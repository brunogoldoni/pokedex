import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {LoadingContainer} from './styles';

interface ILoading {
  size: number,
  color: string,
}

const Loading = ({size, color, ...props}: ILoading) => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} color={color} {...props} />
    </LoadingContainer>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 'small',
  color: '#E81129',
};

export default Loading;
