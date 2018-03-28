import React from 'react';
import {FlatList, Button} from 'react-native';
import gql from 'graphql-tag';
import UserTile, {USER_TILE_FRAGMENT} from '../components/UserTile';
import Container from './Container';
import DefaultQuery from './DefaultQuery';

const UserList = ({login}) => (
  <Container>
    <DefaultQuery query={QUERY} variables={{login}}>
      {({data: {search: {edges: users}}, fetchMore}) => (
        <FlatList
          data={users}
          keyExtractor={(item, index) => index}
          renderItem={({item: {node: user}}) => <UserTile user={user} />}
          ListFooterComponent={() => (
            <LoadMoreFooter users={users} fetchMore={fetchMore} />
          )}
        />
      )}
    </DefaultQuery>
  </Container>
);

const QUERY = gql`
  query UserSearch($login: String!, $cursor: String) {
    search(first: 5, query: $login, type: USER, after: $cursor) {
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

const LoadMoreFooter = ({users, fetchMore}) =>
  users.length !== 0 && (
    <Button
      title="Load More"
      onPress={() => loadMoreResults(users, fetchMore)}
    />
  );

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

export default UserList;
