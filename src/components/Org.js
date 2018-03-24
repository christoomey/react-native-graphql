import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

const Org = ({org}) => <StyledImage source={{uri: org.avatarUrl}} />;

export const ORG_FRAGMENT = gql`
  fragment Org on Organization {
    id
    name
    avatarUrl
  }
`;

const StyledImage = styled.Image`
  height: 25px;
  margin-right: 5px;
  width: 25px;
`;

export default Org;
