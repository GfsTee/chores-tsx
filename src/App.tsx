import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import allData from './config/useCases';
import Timer from './components/Timer';
import './App.css'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      {allData.map(category => <div
        className="timer-container"
        timer-container key={uuidv4()}
      >
        <h1>{category.sideline}</h1>
        {category.data.map(ele => <Timer key={uuidv4()} ele={ele} />)}
      </div>)}
    </div>
  )
}

export default App;
