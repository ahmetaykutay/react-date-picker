const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const _d = new Date();
const CURRENT_MONTH = _d.getMonth() + 1; // 0-11
const CURRENT_YEAR = _d.getFullYear();

/**
 * returns index of first day of a month
 *
 * @param {number} month
 * @param {number} year
 * @returns {number}
 */
function getFirstDay(month: number, year: number): number {
  const dateStr = `${MONTHS_LONG[month - 1]} ${1} ${year}`;
  const tmp = new Date(dateStr).toDateString();
  const firstDay = tmp.substring(0, 3);
  return DAYS_SHORT.indexOf(firstDay);
}

/**
 * returns numbers of day a month has
 *
 * @param {number} month
 * @param {number} year
 * @returns {number}
 */
function getNumberOfDays(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

const NUMBER_OF_DAYS = getNumberOfDays(CURRENT_MONTH, CURRENT_YEAR);


/**
 * returns an array of day number [1: first day, 2: second day] starting from first day of month
 * the array size is 42
 *
 * @param {number} [month=CURRENT_MONTH]
 * @param {number} [year=CURRENT_YEAR]
 * @returns
 */
function getMonthArray(month: number = CURRENT_MONTH, year: number = CURRENT_YEAR) {
  const calendarDays = [];
  const dayNo = getFirstDay(month, year);
  const numberOfDays = getNumberOfDays(month, year);
  // fill blanks at the beginning
  for (let i = 0; i < dayNo; i += 1) {
    calendarDays.push(null);
  }

  // fill days
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
  CURRENT_MONTH,
  CURRENT_YEAR,
  getMonthArray,
  getNumberOfDays,
};
