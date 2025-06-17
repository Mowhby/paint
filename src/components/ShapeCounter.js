import React from 'react';
import { drawShape } from '../utils/shapes';

function ShapeCounter({ shapes }) {
  const shapeCounts = shapes.reduce((acc, shape) => {
    acc[shape.type] = (acc[shape.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="shape-counter">
      <h3>تعداد اشکال</h3>
      {Object.keys(shapeCounts).map((shape) => (
        <div
          key={shape}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              marginRight: '10px'
            }}
          >
            {drawShape(shape, 20)}
          </div>
          <span style={{ fontSize: '18px' }}>{shapeCounts[shape]}</span>
        </div>
      ))}
    </div>
  );
}

export default ShapeCounter;
