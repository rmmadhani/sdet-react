import React from 'react';

const TableA = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Replace with your data keys */}
          <th>ID</th>
          <th>Name</th>
          {/* ... other headers */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            {/* ... other data cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableA;

