import { isArray } from '@/utils/checkType';

export function isHaveValue(anchor: unknown): anchor is Array<unknown> {
  return isArray(anchor) && anchor.length === 3;
}
