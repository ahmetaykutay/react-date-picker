export function pad(str: string | number, size: number = 2, char: string = '0') {
  let newStr = `${str}`;
  while (newStr.length < size) { newStr = char + newStr; }
  return newStr;
}
