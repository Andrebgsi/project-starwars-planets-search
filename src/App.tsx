import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Table /> } />
    </Routes>
  );
}

export default App;
