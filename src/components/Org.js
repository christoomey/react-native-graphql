import React from 'react';
import {Image, StyleSheet} from 'react-native';
import gql from 'graphql-tag';

const Org = ({org}) => (
  <Image source={{uri: org.avatarUrl}} style={styles.image} />
);

export const ORG_FRAGMENT = gql`
  fragment Org on Organization {
    id
    name
    avatarUrl
  }
`;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});

export default Org;
