import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <Link to={`/${user.login}`}>
    <View style={styles.row} margin={5}>
      <Image source={{uri: user.avatarUrl}} style={{width: 20, height: 20}} />
      <View>
        <Text>
          {user.login} {user.name !== '' && `(${user.name})`}
        </Text>
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
});

export default UserTile;
