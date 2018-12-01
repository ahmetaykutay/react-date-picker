import React, { Component } from 'react';
import styled from 'styled-components';
import DateInput from './components/DateInput/DateInput';
import Calendar from './components/Calendar/Calendar';


const DatePickerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;


type DatePickerPropsType = {
  onSelectDate: Function,
};


class DatePicker extends Component<DatePickerPropsType> {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      month: 0,
      year: 0,
      isCalendarOpen: false,
    };
  }

  notifyDateSelect = () => {
    const { onSelectDate } = this.props;
    const { day, month, year } = this.state;
    onSelectDate(`${day}/${month}/${year}`);
  }

  handleDayChange = val => this.setState((state) => {
    const newVal = Number(val);
    if (typeof newVal !== 'number' || Number.isNaN(newVal) || newVal > 30) return { day: state.day };
    return { day: newVal };
  })

  handleMonthChange = val => this.setState((state) => {
    const newVal = Number(val);
    if (typeof newVal !== 'number' || Number.isNaN(newVal) || newVal > 12) return { month: state.month };
    return { month: newVal };
  })

  handleYearChange = val => this.setState((state) => {
    const newVal = Number(val);
    if (typeof newVal !== 'number' || Number.isNaN(newVal) || newVal > 9999) return { year: state.year };
    return { year: newVal };
  })

  onDateChange = (d) => {
    this.setState({
      year: d.year,
      month: d.month,
      day: d.day,
    });
  }

  render() {
    const {
      day, month, year, isCalendarOpen,
    } = this.state;
    return (
      <DatePickerContainer>
        <DateInput
          onDayChange={this.handleDayChange}
          onMonthChange={this.handleMonthChange}
          onYearChange={this.handleYearChange}
          day={day}
          month={month}
          year={year}
          onCalendarClick={() => this.setState(state => ({
            isCalendarOpen: !state.isCalendarOpen,
          }))}
        />
        {
          isCalendarOpen ? (
            <Calendar onDateChange={this.onDateChange} />
          ) : null
        }
      </DatePickerContainer>
    );
  }
}

export default DatePicker;
