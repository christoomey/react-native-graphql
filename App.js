import React from 'react';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import {GITHUB_TOKEN} from 'react-native-dotenv';
import {NativeRouter} from 'react-router-native';
import {Navigation, Card} from 'react-router-navigation';
import SearchPage from './src/pages/SearchPage';
import UserPage from './src/pages/UserPage';

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
}));

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <NativeRouter>
      <Navigation>
        <Card
          exact
          title="GitHub User Search"
          backButtonTitle="Search"
          path="/"
          component={SearchPage}
        />
        <Card
          exact
          renderTitle={({match}) => match.params.login}
          path="/:login"
          component={UserPage}
        />
      </Navigation>
    </NativeRouter>
  </ApolloProvider>
);

export default App;
