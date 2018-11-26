import React, { Component } from 'react';
import Icon from '../../CalendarIcon';
import { DateInputContainer, CalendarIcon } from './styled';


type Props = {
  separator?: string,
  onDayChange: Function,
  onMonthChange: Function,
  onYearChange: Function,
  onCalendarClick: Function,
  day: number | '',
  month: number | '',
  year: number | '',
}

class DateInput extends Component<Props> {
  static defaultProps = {
    separator: '/',
  }

  render() {
    const {
      separator, onDayChange, onMonthChange, onYearChange,
      day, month, year, onCalendarClick,
    } = this.props;
    return (
      <DateInputContainer>
        <input value={day !== 0 ? day : ''} type="text" onChange={e => onDayChange(e.target.value)} />
        <span style={{ margin: 'auto' }}>{separator}</span>
        <input value={month !== 0 ? month : ''} type="text" onChange={e => onMonthChange(e.target.value)} />
        <span style={{ margin: 'auto' }}>{separator}</span>
        <input style={{ width: '36px', paddingLeft: '3px', textAlign: 'left' }} value={year !== 0 ? year : ''} type="text" onChange={e => onYearChange(e.target.value)} />
        <CalendarIcon
          onClick={onCalendarClick}
        >
          <Icon />
        </CalendarIcon>
      </DateInputContainer>
    );
  }
}


export default DateInput;
