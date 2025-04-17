import {
  forwardRef,
  type ForwardRefExoticComponent,
  type ForwardRefRenderFunction,
  type PropsWithoutRef,
  type RefAttributes,
} from 'react';

export function fixedForwardRef<T, P>(
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  return forwardRef(render);
}
