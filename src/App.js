import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import MakeReport from './views/MakeReport';
import ViewReports from './views/ViewReports';
import ReadReport from './views/ReadReport';

function App() {
  return (
    <div className="App">
      <Router>
        <ViewReports path='/reports'/>
        <MakeReport path='/reports/compose'/>
        <ReadReport path='/reports/:id'/>
      </Router>
    </div>
  );
}

export default App;
