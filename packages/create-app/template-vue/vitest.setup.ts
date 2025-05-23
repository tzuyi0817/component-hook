import { mswServer } from '@/mocks/server';
import '@testing-library/jest-dom';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
