import React from 'react';
import {Text} from 'react-native';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-native';
import Page from '../components/Page';
import withLoading from '../hocs/withLoading';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';
// import Org, {ORG_FRAGMENT} from '../components/Org';
// import Repo, {REPO_FRAGMENT} from '../components/Repo';

const UserPage = ({data: {user}}) => (
  <Page>
    <UserHeader user={user} />
    <Link to="/users">
      <Text>back to users list</Text>
    </Link>
  </Page>
);

const QUERY = gql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserHeader
    }
  }

  ${USER_HEADER_FRAGMENT}
`;

const withQuery = graphql(QUERY, {
  options: ({match: {params}}) => ({
    variables: {login: params.login},
  }),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserPage);
