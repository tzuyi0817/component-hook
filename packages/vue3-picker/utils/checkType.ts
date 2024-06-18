export const isArray = Array.isArray;
export const isPlainObject = (value: unknown): value is object => getRawType(value) === 'object';
export const isObject = (value: unknown): value is Record<PropertyKey, unknown> => typeof value === 'object' && value !== null;

function getRawType(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
