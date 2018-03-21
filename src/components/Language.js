import React from 'react';
import {Text, View} from 'react-native';
import gql from 'graphql-tag';

const Language = ({language, style}) =>
  language && (
    <Text style={style}>
      <Circle color={language.color} />
      {language.name}
    </Text>
  );

const Circle = ({color}) => (
  <View
    style={{
      backgroundColor: color,
      borderRadius: 6,
      height: 12,
      width: 12,
    }}
  />
);

export const LANGUAGE_FRAGMENT = gql`
  fragment Language on Language {
    id
    name
    color
  }
`;

export default Language;
