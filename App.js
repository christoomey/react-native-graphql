import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GITHUB_TOKEN} from 'react-native-dotenv';

const App = () => (
  <View style={styles.container}>
    <Text>token: {GITHUB_TOKEN}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
