import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test for simple render 
it('renders without crashing', () => {
  shallow(<App />);
});
