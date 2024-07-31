import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './user/index.js';
import Task from './task/task.js'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />}>
      </Route>
      <Route path="task" element={<Task />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
