import React, { Component } from 'react';
import calendar from '../../helpers/calendar';
import { CalendarCon, Td } from './styled';


type CalendarType = {
  onSelectDate: Function,
};

class Calendar extends Component<CalendarType, {}> {
  constructor(props: CalendarType) {
    super(props);
    const currentMonth = calendar.CURRENT_MONTH;
    this.state = {
      currentMonth,
    };
  }

  render() {
    const { onSelectDate } = this.props;
    const { currentMonth } = this.state;
    const monthArray = calendar.getMonthArray();

    const days = [];
    for (let i = 0; i < 6; i += 1) {
      const r = [];
      for (let j = 0; j < 7; j += 1) {
        const tdInner = monthArray[j + i * 7];
        r.push(tdInner ? (
          <Td
            onClick={() => onSelectDate({ day: tdInner, month: currentMonth, year: 1212 })}
          >
            {tdInner}
          </Td>
        ) : <td />);
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
