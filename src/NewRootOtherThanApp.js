// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './com_parent1.js';


function NewRootOtherThanAppComponent() {
    return (
      <div>
        <h1>Hello from NewRootOtherThanApp :- Component  Main Component</h1>
        <MainComponent />
        {/* Your component content here */}
      </div>
    );
  }
  
  export default NewRootOtherThanAppComponent;