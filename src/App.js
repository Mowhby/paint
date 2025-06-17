import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ShapeCounter from './components/ShapeCounter';

function App() {
  const [shapes, setShapes] = useState([]);
  const [title, setTitle] = useState('نقاشی من');

  return (
    <div className="app">
      <Header shapes={shapes} setShapes={setShapes} title={title} setTitle={setTitle} />
      <div className="main">
        <Sidebar />
        <Canvas shapes={shapes} setShapes={setShapes} />
        <ShapeCounter shapes={shapes} />
      </div>
    </div>
  );
}

export default App;
