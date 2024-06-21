import { isArray } from './checkType';

export function isHaveValue(value: unknown): value is Array<unknown> {
  return isArray(value) && value.length === 3;
}
