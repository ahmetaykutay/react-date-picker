/**
 * add a character to starting of a string
 *
 * @export
 * @param {(string | number)} str
 * @param {number} [size=2]
 * @param {string} [char='0']
 * @returns
 */
export function pad(str: string | number, size: number = 2, char: string = '0') {
  let newStr = `${str}`;
  while (newStr.length < size) { newStr = char + newStr; }
  return newStr;
}
