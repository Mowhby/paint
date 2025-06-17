import React from 'react';
import { exportShapes, importShapes } from '../utils/fileHandler';

function Header({ shapes, setShapes, title, setTitle }) {
  const handleExport = () => {
    exportShapes({ shapes, title });
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      importShapes(file, setShapes, setTitle);
    }
  };

  return (
    <div className="header">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان نقاشی را وارد کنید..."
        style={{
          fontSize: '20px',
          padding: '5px',
          width: '300px',
          borderRadius: '5px'
        }}
      />
      <div>
        <button onClick={handleExport}>Export</button>
        <label style={{ marginLeft: '10px', cursor: 'pointer' }}>
          Import
          <input type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
        </label>
      </div>
    </div>
  );
}

export default Header;
