import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {GITHUB_TOKEN} from 'react-native-dotenv';
import {NativeRouter} from 'react-router-native';
import {Navigation, Card} from 'react-router-navigation';
import Reactotron from 'reactotron-react-native';
import SearchPage from './src/pages/SearchPage';
import UserPage from './src/pages/UserPage';

Reactotron.configure()
  .useReactNative()
  .connect();

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
  },
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
