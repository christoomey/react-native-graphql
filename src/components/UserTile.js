import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <Link to={`/${user.login}`}>
    <View style={styles.row} margin={5}>
      <Image source={{uri: user.avatarUrl}} style={styles.avatar} />
      <View>
        <Text style={styles.login}>{user.login}</Text>
        <Text style={styles.name}>{user.name !== null && `${user.name}`}</Text>
      </View>
    </View>
  </Link>
);

export const USER_TILE_FRAGMENT = gql`
  fragment UserTile on User {
    id
    login
    name
    avatarUrl
  }
`;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    borderRadius: 3,
    height: 40,
    marginRight: 5,
    width: 40,
  },
  login: {
    fontSize: 20,
  },
  name: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default UserTile;
