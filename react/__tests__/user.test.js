import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import User from '../user';

describe('User', () => {
  it('renders the user\'s properties', () => {
    const user = TestUtils.renderIntoDocument(
      <User firstName="John" lastName="Doe" username="jdoe" />
    );

    const userNode = ReactDOM.findDOMNode(user);
    expect(userNode.textContent).toEqual('John Doe');
  });
});
