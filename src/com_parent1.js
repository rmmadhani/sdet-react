// src/MainComponent.js
import React from 'react';
import ChildComponent from './com_child1.js';

function MainComponent() {
  return (
    <div>
      <h1>Welcome to the Main Component</h1>
      
      <ChildComponent />
    </div>
  );
}

export default MainComponent;
