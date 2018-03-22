import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Page from '../components/Page';
import UserList from '../components/UserList';

class SearchPage extends React.Component {
  state = {
    username: '',
  };

  handleSubmit = event => {
    this.setState({username: event.nativeEvent.text});
  };

  render() {
    return (
      <Page>
        <TextInput
          style={styles.input}
          onSubmitEditing={this.handleSubmit}
          autoCapitalize="none"
          placeholder="Enter part of a user's name or GitHub login"
        />
        <UserList username={this.state.username} />
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 2,
  },
});

export default SearchPage;
