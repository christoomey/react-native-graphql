import React from 'react';
import {FlatList} from 'react-native';
import gql from 'graphql-tag';
import Page from '../components/Page';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';
import DefaultQuery from '../components/DefaultQuery';
import Org, {ORG_FRAGMENT} from '../components/Org';
import Repo, {REPO_FRAGMENT} from '../components/Repo';
import RowSection from '../components/RowSection';

const UserPage = ({match: {params: {login}}}) => (
  <DefaultQuery query={QUERY} variables={{login}}>
    {({data: {user}}) => (
      <Page>
        <UserHeader user={user} />

        <RowSection>
          {user.organizations.nodes.map(org => <Org key={org.id} org={org} />)}
        </RowSection>

        <FlatList
          data={user.repositories.nodes}
          keyExtractor={repo => repo.id}
          renderItem={({item: repo}) => <Repo repo={repo} />}
        />
      </Page>
    )}
  </DefaultQuery>
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

export default UserPage;
