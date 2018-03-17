import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import withLoading from '../hocs/withLoading';

const UserList = ({data: {search}}) => (
  <View>
    <FlatList
      data={search.edges}
      renderItem={({item: {node: user}}) => <Text>{user.login}</Text>}
    />
  </View>
);

const QUERY = gql`
  query UserSearch($username: String!, $cursor: String) {
    search(first: 10, query: $username, type: USER, after: $cursor) {
      edges {
        cursor
        node {
          ... on User {
            id
            name
            login
          }
        }
      }
    }
  }
`;

const withQuery = graphql(QUERY, {
  options: ({username}) => ({variables: {username}}),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserList);
