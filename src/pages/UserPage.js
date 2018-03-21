import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Page from '../components/Page';
import withLoading from '../hocs/withLoading';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';
import Org, {ORG_FRAGMENT} from '../components/Org';
import Repo, {REPO_FRAGMENT} from '../components/Repo';

const UserPage = ({data: {user}}) => (
  <Page>
    <UserHeader user={user} />

    <View style={styles.orgList}>
      {user.organizations.nodes.map(org => <Org key={org.id} org={org} />)}
    </View>

    <FlatList
      data={user.repositories.nodes}
      keyExtractor={repo => repo.id}
      renderItem={({item: repo}) => <Repo repo={repo} />}
    />
  </Page>
);

const QUERY = gql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserHeader

      repositories(
        first: 10
        isFork: false
        orderBy: {field: STARGAZERS, direction: DESC}
      ) {
        nodes {
          ...Repo
        }
      }

      organizations(first: 10) {
        nodes {
          ...Org
        }
      }
    }
  }

  ${USER_HEADER_FRAGMENT}
  ${ORG_FRAGMENT}
  ${REPO_FRAGMENT}
`;

const styles = StyleSheet.create({
  orgList: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});

const withQuery = graphql(QUERY, {
  options: ({match: {params}}) => ({
    variables: {login: params.login},
  }),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserPage);
