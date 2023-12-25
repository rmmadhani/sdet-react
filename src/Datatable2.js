import React, { useState, useEffect } from 'react';
import {fetchData,transformData,fetchDataFromApi} from './services/DataService.js';
import './TableStyles.css';  // Importing the CSS file



const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromApi().then(fetchedData => {
      setData(fetchedData);
    });
  }, []);

  return (
    <div>
      <h1>API Data Table</h1>
      <Table data={data} />
    </div>
  );
};

export default Table;
