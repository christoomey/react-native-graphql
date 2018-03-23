import React from 'react';
import styled from 'styled-components';
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
        <StyledInput
          onSubmitEditing={this.handleSubmit}
          autoCapitalize="none"
          placeholder="Enter part of a user's name or GitHub login"
        />
        <UserList username={this.state.username} />
      </Page>
    );
  }
}

const StyledInput = styled.TextInput`
  height: 30px;
  border-color: grey;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 2px;
`;

export default SearchPage;
