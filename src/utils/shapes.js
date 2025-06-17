import React from 'react';

export function drawShape(type, size = 50) {
  if (type === 'circle') {
    return (
      <div style={{ width: size, height: size, borderRadius: '50%', backgroundColor: 'red' }}></div>
    );
  } else if (type === 'square') {
    return (
      <div style={{ width: size, height: size, backgroundColor: 'green' }}></div>
    );
  } else if (type === 'triangle') {
    return (
      <div style={{ width: size, height: size, position: 'relative' }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid blue`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>
    );
  }
}
