import React from 'react';
import gql from 'graphql-tag';
import {compose, graphql} from 'react-apollo';
import {Button} from 'react-native';

const ToggleStarButton = ({repo, starMutation, unstarMutation}) =>
  repo.viewerHasStarred ? (
    <BaseToggleButton title="UnStar" mutation={unstarMutation} repo={repo} />
  ) : (
    <BaseToggleButton title="Star" mutation={starMutation} repo={repo} />
  );

const BaseToggleButton = ({mutation, repo, title}) => (
  <Button
    title={title}
    onPress={() => mutation({variables: {repoId: repo.id}})}
  />
);

export const STARS_FRAGMENT = gql`
  fragment Stars on Repository {
    id
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`;

const STAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    addStar(input: {starrableId: $repoId}) {
      starrable {
        ...Stars
      }
    }
  }
  ${STARS_FRAGMENT}
`;

const UNSTAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    removeStar(input: {starrableId: $repoId}) {
      starrable {
        ...Stars
      }
    }
  }
  ${STARS_FRAGMENT}
`;

const withStarMutation = graphql(STAR_MUTATION, {name: 'starMutation'});
const withUnstarMutation = graphql(UNSTAR_MUTATION, {name: 'unstarMutation'});

export default compose(withStarMutation, withUnstarMutation)(ToggleStarButton);
