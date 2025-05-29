import { cleanup } from '@testing-library/vue';
import { mswServer } from '@/mocks/server';
import '@testing-library/jest-dom';

beforeAll(() => mswServer.listen());

afterEach(() => {
  cleanup();
  mswServer.resetHandlers();
});

afterAll(() => mswServer.close());
