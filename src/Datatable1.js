// DataTable.js
import React, { useState, useEffect } from 'react';
import {fetchData,transformData,fetchDataFromApi, fetchDatanorthwind} from './services/DataService.js';
import './TableStyles.css';  // Importing the CSS file

function DataTable() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  useEffect(() => {
    const loadData = async () => {
      const apiData = await fetchData();
      setData(apiData);
    };

    loadData();
  }, []);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
    }
    setSortConfig({ key, direction });
}
const sortedData = React.useMemo(() => {
  let sortableData = [...data];
  if (sortConfig !== null) {
      sortableData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
      });
  }
  return sortableData;
}, [data, sortConfig]);



  return (
    <table className="data-table">
      <thead>
        {/* <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Other Column</th>
        </tr> */}


        <tr>
                    <th onClick={() => requestSort('id')}>ID</th>
                    <th onClick={() => requestSort('userId')}>Name</th>
                    <th onClick={() => requestSort('title')}>Age</th>
                </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
