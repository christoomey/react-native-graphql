import React from 'react';
import {TextInput} from 'react-native';
import Page from '../components/Page';
import UserList from '../components/UserList';

class SearchPage extends React.Component {
  state = {
    login: '',
  };

  handleSubmit = event => {
    this.setState({login: event.nativeEvent.text});
  };

  render() {
    return (
      <Page>
        <TextInput
          style={{height: 26, borderColor: 'gray', borderWidth: 1}}
          onSubmitEditing={this.handleSubmit}
          autoCapitalize="none"
        />
        <UserList login={this.state.login} />
      </Page>
    );
  }
}

export default SearchPage;
