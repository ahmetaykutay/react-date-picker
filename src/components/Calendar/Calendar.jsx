import React, { Component } from 'react';
import calendar from '../../helpers/calendar';
import { CalendarCon } from './styled';


class Calendar extends Component<{}> {
  render() {
    const monthArray = calendar.getMonthArray();

    const days = [];
    for (let i = 0; i < 6; i += 1) {
      const r = [];
      for (let j = 0; j < 7; j += 1) {
        r.push(<td>{monthArray[j + i * 7]}</td>);
      }
      days.push(<tr>{r}</tr>);
    }
    return (
      <CalendarCon>
        <table>
          <tbody>
            {days}
          </tbody>
        </table>
      </CalendarCon>
    );
  }
}

export default Calendar;
