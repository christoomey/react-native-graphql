import React from 'react';
import styled from 'styled-components';
import {Linking} from 'react-native';

const WebLink = ({href, children}) => (
  <StyledLink onPress={() => Linking.openURL(href)}>{children}</StyledLink>
);

const StyledLink = styled.Text`
  color: #0366d6;
  font-size: 24px;
`;

export default WebLink;
