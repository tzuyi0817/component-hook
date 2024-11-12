import { isArray } from './check-type';

export function isHaveValue(value: unknown): value is Array<unknown> {
  return isArray(value) && value.length === 3;
}

export function isLeapYear(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function generateList(start: number, end: number) {
  const result: Array<number> = [];

  for (let index = start; index <= end; index++) {
    result.push(index);
  }
  return result;
}

export function generateTime(start: number, end: number) {
  const result: Array<string> = [];

  for (let index = start; index <= end; index++) {
    result.push(`${index}`.padStart(2, '0'));
  }
  return result;
}
