import React, { Component } from 'react';
import Header from './Header';

type DatePickerPropsType = {};


class DatePicker extends Component<DatePickerPropsType> {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default DatePicker;
