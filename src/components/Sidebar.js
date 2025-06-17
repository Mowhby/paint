import React from 'react';
import { drawShape } from '../utils/shapes';

function Sidebar() {
  const shapes = ['circle', 'square', 'triangle'];

  return (
    <div className="sidebar">
      <h3>اشکال</h3>
      {shapes.map((shape) => (
        <div
          key={shape}
          draggable
          onDragStart={(e) => e.dataTransfer.setData('shape', shape)}
          style={{
            width: 60,
            height: 60,
            margin: '10px auto',
            cursor: 'grab',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fefefe'
          }}
        >
          {drawShape(shape, 30)}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
