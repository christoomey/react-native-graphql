import React from 'react';
import {Image} from 'react-native';
import gql from 'graphql-tag';

const Org = ({org}) => (
  <Image source={{uri: org.avatarUrl}} style={{width: 25, height: 25}} />
);

export const ORG_FRAGMENT = gql`
  fragment Org on Organization {
    id
    name
    avatarUrl
  }
`;

export default Org;
