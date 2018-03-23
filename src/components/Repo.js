import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Language, {LANGUAGE_FRAGMENT} from './Language';
import WebLink from './WebLink';
import {ForkedIcon, StarIcon} from './Icon';
import Card from './Card';
import Row from './Row';

const Repo = ({repo, unstarMutation, starMutation}) => (
  <Card>
    <Row style={styles.repoHeader}>
      <WebLink href={repo.url}>{repo.name}</WebLink>
      {repo.viewerHasStarred ? (
        <ToggleStarButton mutation={unstarMutation} repo={repo} text="UnStar" />
      ) : (
        <ToggleStarButton mutation={starMutation} repo={repo} text="Star" />
      )}
    </Row>

    <Text style={styles.description}>{repo.description}</Text>

    <Row>
      <Language language={repo.primaryLanguage} style={styles.detail} />
      <Text style={[styles.withIcon, styles.detail]}>
        <ForkedIcon />
        {repo.forkCount}
      </Text>
      <Text style={[styles.withIcon, styles.detail]}>
        <StarIcon />
        {repo.stargazers.totalCount}
      </Text>
    </Row>
  </Card>
);

const ToggleStarButton = ({mutation, repo, text}) => (
  <Button
    title={text}
    onPress={() => mutation({variables: {repoId: repo.id}})}
  />
);

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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  detail: {
    marginRight: 10,
  },
  description: {
    marginBottom: 10,
  },
  repoHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  withIcon: {
    flexDirection: 'row',
  },
});

const withStarMutation = graphql(STAR_MUTATION, {name: 'starMutation'});
const withUnstarMutation = graphql(UNSTAR_MUTATION, {name: 'unstarMutation'});

export default compose(withStarMutation, withUnstarMutation)(Repo);
