import React from 'react';
import {Text} from 'react-native';
import gql from 'graphql-tag';
import RowSection from './RowSection';
import Container from './Container';
import Title from './Title';
import Avatar from './Avatar';
import SubTitle from './SubTitle';

const UserHeader = ({user}) => (
  <RowSection>
    <Avatar source={{uri: user.avatarUrl}} />
    <Container>
      <Title>{user.login}</Title>
      <SubTitle>{user.name || '(name not provided)'}</SubTitle>
      <Text>{user.bio}</Text>
    </Container>
  </RowSection>
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
