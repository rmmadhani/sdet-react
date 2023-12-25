// DataTable1.test
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import DataTable from './Datatable1';
import axios from 'axios';

// Mock axios or any other library used for fetching data
jest.mock('axios');
test('renders data after fetching', async () => {
    // Mock the API call
    axios.get.mockResolvedValue({
      data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
    });
  
    render(<DataTable />);
  
    // Wait for the data to be displayed
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });