import React from 'react';
import {Text, View} from 'react-native';
import gql from 'graphql-tag';

const Language = ({language, style}) =>
  language && (
    <View style={[{flexDirection: 'row'}, style]}>
      <Circle color={language.color} />
      <Text style={{marginLeft: 2}}>{language.name}</Text>
    </View>
  );

const Circle = ({color}) => (
  <View
    collapsable={false}
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
