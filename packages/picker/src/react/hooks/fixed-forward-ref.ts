import {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  type ForwardRefRenderFunction,
  type PropsWithoutRef,
} from 'react';

export function fixedForwardRef<T, P>(
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  return forwardRef(render);
}
