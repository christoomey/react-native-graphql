import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Row from './Row';

const Language = ({language, style}) =>
  language && (
    <Row style={style}>
      <Circle color={language.color} />
      <SpacedText>{language.name}</SpacedText>
    </Row>
  );

const Circle = styled.View`
  background-color: ${props => props.color};
  border-radius: 6px;
  height: 12px;
  width: 12px;
`;

const SpacedText = styled.Text`
  margin-left: 2px;
`;

export const LANGUAGE_FRAGMENT = gql`
  fragment Language on Language {
    id
    name
    color
  }
`;

export default Language;
