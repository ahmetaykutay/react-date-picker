const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const _d = new Date();
const _currentMonth = _d.getMonth() + 1; // 0-11
const _year = _d.getFullYear();
const _firstDate = `${MONTHS_LONG[_currentMonth - 1]} ${1} ${_year}`;
const _tmp = new Date(_firstDate).toDateString();
const _firstDay = _tmp.substring(0, 3);
const _dayNo = DAYS_SHORT.indexOf(_firstDay);


function getNumberOfDays({
  year = _year,
  month = _currentMonth,
}:{
  year?: number,
  month?: number
} = {}) {
  return new Date(year, month, 0).getDate();
}

const NUMBER_OF_DAYS = getNumberOfDays();


function getMonthArray({
  numberOfDays = NUMBER_OF_DAYS,
  dayNo = _dayNo,
}: {
  numberOfDays?: number,
  dayNo?: number
} = {}) {
  const calendarDays = [];

  // fill blanks at the beginning
  for (let i = 0; i < dayNo; i += 1) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= numberOfDays; i += 1) {
    calendarDays.push(i);
  }

  // fill blanks at the end
  for (let i = (numberOfDays + dayNo); i < 42; i += 1) {
    calendarDays.push(null);
  }

  return calendarDays;
}

export default {
  MONTHS_LONG,
  MONTHS_SHORT,
  DAYS_SHORT,
  NUMBER_OF_DAYS,
  getMonthArray,
  getNumberOfDays,
};
