import React from 'react';
import { render } from 'react-dom';
import DatePicker from '../../src';


const App = () => (
  <DatePicker
    onSelectDate={val => console.log('Demo:', val)}
  />
);

render(<App />, document.getElementById('root'));
