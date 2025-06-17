import React from 'react';
import { drawShape } from '../utils/shapes';

function Canvas({ shapes, setShapes }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const shapeType = e.dataTransfer.getData('shape');

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newShape = {
      id: Date.now(),
      type: shapeType,
      x,
      y
    };
    setShapes([...shapes, newShape]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDoubleClick = (id, e) => {
    e.stopPropagation();
    const updatedShapes = shapes.filter((shape) => shape.id !== id);
    setShapes(updatedShapes);
  };

  return (
    <div className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          onDoubleClick={(e) => handleDoubleClick(shape.id, e)}
          style={{
            position: 'absolute',
            left: shape.x - 25,
            top: shape.y - 25,
            width: 50,
            height: 50,
            cursor: 'pointer'
          }}
        >
          {drawShape(shape.type)}
        </div>
      ))}
    </div>
  );
}

export default Canvas;
