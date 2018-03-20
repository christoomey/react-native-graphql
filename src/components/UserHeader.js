import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import gql from 'graphql-tag';

const UserHeader = ({user}) => (
  <View style={styles.row}>
    <Image source={{uri: user.avatarUrl}} style={styles.avatar} />
    <View style={{flex: 1}}>
      <Text style={styles.loginTitle}>{user.login}</Text>
      <Text style={styles.name}>{user.name || '(name not provided)'}</Text>
      <Text>{user.bio}</Text>
    </View>
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
    marginBottom: 10,
  },
  loginTitle: {
    fontSize: 24,
  },
  name: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 3,
    marginRight: 10,
  },
});

export default UserHeader;
