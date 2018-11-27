import React, { Component } from 'react';
import calendar from '../../helpers/calendar';
import { CalendarCon, Td } from './styled';


class Calendar extends Component<{}> {
  render() {
    const monthArray = calendar.getMonthArray();

    const days = [];
    for (let i = 0; i < 6; i += 1) {
      const r = [];
      for (let j = 0; j < 7; j += 1) {
        const tdInner = monthArray[j + i * 7];
        r.push(tdInner ? <Td>{tdInner}</Td> : <td />);
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
