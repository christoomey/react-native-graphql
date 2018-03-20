import React from 'react';
import {TextInput} from 'react-native';
import Page from '../components/Page';
import UserList from '../components/UserList';

class SearchPage extends React.Component {
  state = {
    username: 'toomey',
  };

  handleSubmit = event => {
    this.setState({username: event.nativeEvent.text});
  };

  render() {
    return (
      <Page>
        <TextInput
          style={{height: 26, borderColor: 'gray', borderWidth: 1}}
          onSubmitEditing={this.handleSubmit}
          autoCapitalize="none"
          placeholder="Enter part of a user name or login"
        />
        <UserList username={this.state.username} />
      </Page>
    );
  }
}

export default SearchPage;
