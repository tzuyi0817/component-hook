import { isArray } from './check-type';

export function isHaveValue(value: unknown): value is Array<unknown> {
  return isArray(value) && value.length === 3;
}
