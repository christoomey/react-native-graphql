import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import gql from 'graphql-tag';

const UserHeader = ({user}) => (
  <View style={styles.row}>
    <Image source={{uri: user.avatarUrl}} style={{width: 75, height: 75}} />
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default UserHeader;
