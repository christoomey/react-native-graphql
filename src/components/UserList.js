import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import withLoading from '../hocs/withLoading';
import UserTile, {USER_TILE_FRAGMENT} from '../components/UserTile';

const UserList = ({data: {search, fetchMore}}) => (
  <View style={{flex: 1}}>
    <FlatList
      data={search.edges}
      keyExtractor={(item, index) => index}
      renderItem={({item: {node: user}}) => <UserTile user={user} />}
      ListFooterComponent={() =>
        search.edges.length !== 0 && (
          <Button
            title="Load More"
            onPress={() => loadMoreResults(search.edges, fetchMore)}
          />
        )
      }
    />
  </View>
);

const QUERY = gql`
  query UserSearch($username: String!, $cursor: String) {
    search(first: 5, query: $username, type: USER, after: $cursor) {
      edges {
        cursor
        node {
          ...UserTile
        }
      }
    }
  }
  ${USER_TILE_FRAGMENT}
`;

const loadMoreResults = (edges, fetchMore) => {
  const {cursor} = edges[edges.length - 1];
  fetchMore({
    variables: {cursor},
    updateQuery: (previousResult, {fetchMoreResult}) => ({
      ...previousResult,
      search: {
        __typename: previousResult.search.__typename,
        edges: [
          ...previousResult.search.edges,
          ...fetchMoreResult.search.edges,
        ],
      },
    }),
  });
};

const withQuery = graphql(QUERY, {
  options: ({username}) => ({variables: {username}}),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserList);
