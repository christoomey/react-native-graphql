import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Icon = ({source}) => <Image source={source} style={styles.icon} />;

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
});

export default Icon;
