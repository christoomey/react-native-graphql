import React from 'react';
import {Button} from 'react-native';

const ToggleStarButton = ({mutation, repo, text}) => (
  <Button
    title={text}
    onPress={() => mutation({variables: {repoId: repo.id}})}
  />
);

export default ToggleStarButton
