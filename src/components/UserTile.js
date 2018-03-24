import React from 'react';
import {View} from 'react-native';
import {Link} from 'react-router-native';
import gql from 'graphql-tag';
import RowSection from './RowSection';
import Avatar from './Avatar';
import SubTitle from './SubTitle';
import Title from './Title';

const UserTile = ({user}) => (
  <Link to={`/${user.login}`}>
    <RowSection>
      <Avatar small source={{uri: user.avatarUrl}} />
      <View>
        <Title>{user.login}</Title>
        <SubTitle>{user.name}</SubTitle>
      </View>
    </RowSection>
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

export default UserTile;
