import React, { useState } from 'react';
import { exportShapes, importShapes } from '../utils/dataHandler';

function Header({ shapes, setShapes, title, setTitle }) {
  const [status, setStatus] = useState(null);
  const [loadingExport, setLoadingExport] = useState(false);
  const [loadingImport, setLoadingImport] = useState(false);

  const handleExport = async () => {
    setStatus(null);
    setLoadingExport(true);
    try {
      await exportShapes({ shapes, title });
      setStatus({ type: 'success', text: 'Exported to server.' });
    } catch (e) {
      setStatus({ type: 'error', text: 'Export failed.' });
    } finally {
      setLoadingExport(false);
    }
  };

  const handleImport = async () => {
    setStatus(null);
    setLoadingImport(true);
    try {
      await importShapes(setShapes, setTitle);
      setStatus({ type: 'success', text: 'Imported from server.' });
    } catch (e) {
      setStatus({ type: 'error', text: 'Import failed.' });
    } finally {
      setLoadingImport(false);
    }
  };

  return (
    <div className="header flex items-center justify-between gap-4 p-2">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان نقاشی را وارد کنید..."
          className="text-xl p-2 rounded-md border"
          style={{ minWidth: '250px' }}
        />
      </div>

      <div className="flex gap-3 items-center">
        <button
          onClick={handleExport}
          disabled={loadingExport || loadingImport}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          {loadingExport ? 'Exporting...' : 'Export'}
        </button>

        <button
          onClick={handleImport}
          disabled={loadingImport || loadingExport}
          className="px-4 py-2 bg-green-600 text-white rounded-md disabled:opacity-50"
        >
          {loadingImport ? 'Importing...' : 'Import from Server'}
        </button>
      </div>

      {status && (
        <div
          className={
            status.type === 'error'
              ? 'text-red-600 ml-4'
              : 'text-green-600 ml-4'
          }
          style={{ minWidth: '200px' }}
        >
          {status.text}
        </div>
      )}
    </div>
  );
}

export default Header;

