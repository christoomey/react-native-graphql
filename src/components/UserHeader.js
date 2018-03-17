import React from 'react';
import {View, Text, Image} from 'react-native';
import gql from 'graphql-tag';

const UserHeader = ({user}) => (
  <View>
    <Image source={{uri: user.avatarUrl}} style={{width: 50, height: 50}} />
    <Text>{user.login}</Text>
    <Text>{user.name || '(name not provided)'}</Text>
    <Text>{user.bio}</Text>
  </View>
);

export const USER_HEADER_FRAGMENT = gql`
  fragment UserHeader on User {
    id
    name
    bio
    login
    avatarUrl
  }
`;

export default UserHeader;
