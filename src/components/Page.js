import React from 'react';
import {View} from 'react-native';

const Page = ({children}) => (
  <View marginTop={30} marginBotton={10} marginHorizontal={10}>
    {children}
  </View>
);

export default Page;
