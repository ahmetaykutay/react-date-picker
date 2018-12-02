import React, { Component } from 'react';
// $FlowFixMe
import generateId from '@aykutay/unique-id-generator';
import calendar from '../../helpers/calendar';
import { CalendarCon, Td } from './styled';
import MonthSelector from './MonthSelector';

type CalendarType = {
  onSelectDate: Function,
  selectedDay: number,
  selectedMonth: number,
  selectedYear: number,
};

type CalendarStateType = {
  selectedMonth: number,
  selectedYear: number,
}

class Calendar extends Component<CalendarType, CalendarStateType> {
  constructor(props: CalendarType) {
    super(props);
    this.state = {
      selectedMonth: props.selectedMonth || calendar.CURRENT_MONTH,
      selectedYear: props.selectedYear || calendar.CURRENT_YEAR,
    };
  }

  onMonthSelect = (m: number) => {
    this.setState((state) => {
      let newMonth = m;
      let newYear = state.selectedYear;
      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
      } else if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1;
      }
      return { selectedMonth: newMonth, selectedYear: newYear };
    });
  }

  render() {
    const { onSelectDate, selectedDay } = this.props;
    const { selectedMonth, selectedYear } = this.state;
    const monthArray = calendar.getMonthArray(selectedMonth, selectedYear);

    const days = [];
    for (let i = 0; i < 6; i += 1) {
      const r = [];
      for (let j = 0; j < 7; j += 1) {
        const tdInner = monthArray[j + i * 7];
        const isSelected = tdInner === selectedDay && selectedMonth === this.props.selectedMonth;
        r.push(tdInner ? (
          <Td
            selected={isSelected}
            key={generateId()}
            onClick={() => onSelectDate({ day: tdInner, month: selectedMonth, year: selectedYear })}
          >
            {tdInner}
          </Td>
        ) : <td key={generateId()} />);
      }
      days.push(<tr key={generateId()}>{r}</tr>);
    }
    return (
      <CalendarCon>
        <MonthSelector selectedMonth={selectedMonth} onMonthSelect={this.onMonthSelect} />
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
