import React from 'react';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import {GITHUB_TOKEN} from 'react-native-dotenv';
import {NativeRouter, Route, Switch, Redirect} from 'react-router-native';
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
      <Switch>
        <Route exact path="/users" component={SearchPage} />
        <Route exact path="/users/:login" component={UserPage} />
        <Redirect from="/" to="/users/christoomey" />
      </Switch>
    </NativeRouter>
  </ApolloProvider>
);

export default App;
