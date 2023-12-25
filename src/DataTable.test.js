// DataTable.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DataTable from './Datatable1.js';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Test User', age: 30 }]), // Mocked data
  })
);

test('loads and displays data', async () => {
  render(<DataTable />);

  await waitFor(() => {
    // Check if the table displays the right data
    expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  });
});

// Reset fetch mock after tests
afterEach(() => {
  jest.resetAllMocks();
});
