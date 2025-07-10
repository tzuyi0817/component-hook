import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { RenderOptions } from '@testing-library/react/types';
import type { ReactElement, ReactNode } from 'react';

function ProvidersWrapper({ children }: { children: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

export function renderComponent(
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(component, { wrapper: ProvidersWrapper, ...options });
}
