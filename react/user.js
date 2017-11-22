import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <div className="user">
        <div className="user-fullname">
          {this.props.firstName} {this.props.lastName}
        </div>
      </div>
    );
  }
}
