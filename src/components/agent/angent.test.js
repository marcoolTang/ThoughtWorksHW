// import React from 'react';
// import Agent from './agent.test.js';
// import renderer from 'react-test-renderer';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <Agent page="http://www.facebook.com">Facebook</Agent>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });