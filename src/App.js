import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MyErrorBoundary from './MyErrorBoundary';
import React, { Suspense } from 'react';
import './App.css';



function App() {

const Login = React.lazy(() => import('./components/login'))
const Main_page = React.lazy(() => import('./main'))

  return (
    <div>
      <Router>
      <Suspense fallback = {<div>Loading ..</div>}>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Main" element={<Main_page/>} />
        </Routes>
      </Suspense>
      </Router>

    </div>

  );
}

export default App;

