import React from 'react';
import {View} from 'react-native';

const Page = ({children}) => (
  <View marginTop={25} marginBotton={5} marginHorizontal={5}>
    {children}
  </View>
);

export default Page;
