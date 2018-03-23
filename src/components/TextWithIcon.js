import React from 'react';
import {Text} from 'react-native';

const TextWithIcon = ({icon: Icon, text, style}) => (
  <Text style={style}>
    <Icon />
    {text}
  </Text>
);

export default TextWithIcon;
