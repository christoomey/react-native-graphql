import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {ApolloClient} from 'apollo-client';
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import {GITHUB_TOKEN} from 'react-native-dotenv';
import SearchPage from './src/pages/SearchPage';
// import UserPage from './pages/UserPage';

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
    <SearchPage />
  </ApolloProvider>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
