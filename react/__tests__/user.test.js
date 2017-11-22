import React from 'react';
import renderer from 'react-test-renderer';
import User from '../user';

describe('User component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<User firstName="John" lastName="Doe" username="jdoe" />)
      .toJSON();
    expect(tree.children[0].children.join('')).toEqual('John Doe');
  });
});
