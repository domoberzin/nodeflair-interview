import React from 'react';
import logo from './logo.svg';
import JobList from './components/jobs/JobList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="m-10">
        <JobList />
      </div>
    </div>
  );
}

export default App;
