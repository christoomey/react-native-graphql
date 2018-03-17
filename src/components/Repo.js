import React from 'react';
import {View, Text, Linking} from 'react-native';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Language, {LANGUAGE_FRAGMENT} from './Language';

const Repo = ({repo}) => (
  <View>
    <WebLink href={repo.url}>{repo.name}</WebLink>
    <Text>{repo.description}</Text>
    <View>
      <Language language={repo.primaryLanguage} />
      <Text> - {repo.forkCount}</Text>
      <Text> - {repo.stargazers.totalCount}</Text>
    </View>
  </View>
);

// <Text>
//   {repo.viewerHasStarred ? (
//     <ToggleStarButton mutation={unstarMutation} repo={repo} text="UnStar" />
//   ) : (
//     <ToggleStarButton mutation={starMutation} repo={repo} text="Star" />
//   )}
// </Text>

const WebLink = ({href, children}) => (
  <Text style={{color: 'blue'}} onPress={() => Linking.openURL(href)}>
    {children}
  </Text>
);

// const ToggleStarButton = ({mutation, repo, text}) => (
//   <button onClick={() => mutation({variables: {repoId: repo.id}})}>
//     {text}
//   </button>
// );

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    url
    name
    description
    forkCount
    viewerHasStarred
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
`;

const STAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    addStar(input: {starrableId: $repoId}) {
      starrable {
        ...Repo
      }
    }
  }
  ${REPO_FRAGMENT}
`;

const UNSTAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    removeStar(input: {starrableId: $repoId}) {
      starrable {
        ...Repo
      }
    }
  }
  ${REPO_FRAGMENT}
`;

const withStarMutation = graphql(STAR_MUTATION, {name: 'starMutation'});
const withUnstarMutation = graphql(UNSTAR_MUTATION, {name: 'unstarMutation'});

export default compose(withStarMutation, withUnstarMutation)(Repo);
