import React from 'react';
import styled from 'styled-components';

const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const ForkedIcon = () => <Icon source={require('./forked.png')} />;
export const StarIcon = () => <Icon source={require('./star.png')} />;

export default Icon;
