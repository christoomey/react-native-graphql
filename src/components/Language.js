import React from 'react';
import {Text} from 'react-native';
import gql from 'graphql-tag';

const Language = ({language, style}) => (
  <Text style={[{color: language.color}, style]}>{language.name}</Text>
);

export const LANGUAGE_FRAGMENT = gql`
  fragment Language on Language {
    id
    name
    color
  }
`;

export default Language;
