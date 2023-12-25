/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */



//2--------------------------


/* import React, { useState, useEffect } from 'react';
import { fetchData, transformData } from './services/DataService';


const style = {
  marginLeft: '14px',
  marginRight: '14px'
};
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const rawData = await fetchData();
      const transformedData = transformData(rawData); // Transform
      setPosts(transformedData); // Load
    };

    loadData();
  }, []);

  return (
    <div style={style}>
      <h1>Transformed Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.id}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App; */

//  2----------------------

// App.js or any other parent component

// App.js can be changed from root component by updating index.js file.
import React from 'react';
import  { useState } from 'react';
import DataTable from './Datatable1.js';
import Counter from './Counter.js';
import MainComponent from './com_parent1.js';
import { ProductList } from './producttable.js';
import TableA from './comp_table.js'
import CSVTable from './CSVTable.js'
import ProductTable1 from './ProductTable1.js';

function App() {
     
  return (
    
    <div className="App">
       
       {/* <Table /> ,
       <MainComponent />,
       <Counter />,
       <DataTable /> 
       <TableA /> 
        
       <ProductList />*/}
       {/* <DataTable /> */}
     {/*  <CSVTable />*/}
        <ProductTable1 /> 
       {/* <DataTable /> */}
    </div>

  );
}

export default App;
