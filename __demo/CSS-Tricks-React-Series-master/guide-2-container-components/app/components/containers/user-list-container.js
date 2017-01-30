import React from 'react';
import _ from 'lodash';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';

const UserListContainer = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    userApi.getUsers().then(users => {
      this.setState({users: users})
    });
  },

  deleteUser: function(userId) {
    userApi.deleteUser(userId).then(() => {
      const newUsers = _.filter(this.state.users, user => user.id != userId);
      this.setState({users: newUsers})
    });
  },

  render: function() {
    return (
      <UserList users={this.state.users} deleteUser={this.deleteUser} />
    );
  }

});

export default UserListContainer;
