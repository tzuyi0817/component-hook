import { cleanup } from '@testing-library/react';
import { mswServer } from '@/mocks/server';
import '@testing-library/jest-dom';
import '@/plugins/i18n';

beforeAll(() => mswServer.listen());

afterEach(() => {
  cleanup();
  mswServer.resetHandlers();
});

afterAll(() => mswServer.close());
