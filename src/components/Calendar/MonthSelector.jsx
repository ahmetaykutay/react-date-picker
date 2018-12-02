import * as React from 'react';
import calendar from '../../helpers/calendar';
import { Triangle } from './styled';

type MonthPropsType = {
    selectedMonth: number,
    onMonthSelect: Function,
}

function MonthSelector(props: MonthPropsType) {
  const { selectedMonth, onMonthSelect } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Triangle onClick={() => onMonthSelect(selectedMonth - 1)} right />
      {calendar.MONTHS_LONG[selectedMonth - 1]}
      <Triangle onClick={() => onMonthSelect(selectedMonth + 1)} left />
    </div>
  );
}

export default MonthSelector;
