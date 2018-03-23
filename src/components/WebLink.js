import React from 'react';
import {Text, Linking, StyleSheet} from 'react-native';

const WebLink = ({href, children}) => (
  <Text style={styles.link} onPress={() => Linking.openURL(href)}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  link: {
    color: '#0366d6',
    fontSize: 24,
  },
});

export default WebLink;
