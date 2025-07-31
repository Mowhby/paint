const USERNAME = 'hasan';
const PASSWORD = 'test';

export async function exportShapes(data) {
  const dataStr = JSON.stringify(data, null, 2);

  try {
    const resp = await fetch('http://localhost:8080/users/update-json-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: USERNAME,
        password: PASSWORD,
        jsonUrl: dataStr
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error('Server update failed: ' + (err.message || resp.status));
    }
    return;
  } catch (e) {
    console.error('exportShapes error:', e);
    throw e;
  }
}

export async function importShapes(setShapes, setTitle) {
  try {
    const resp = await fetch('http://localhost:8080/users/get-json-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: USERNAME,
        password: PASSWORD
      })
    });

    if (!resp.ok) {
      throw new Error('Invalid credentials or server error');
    }

    const body = await resp.json();
    const jsonUrl = body.jsonUrl || body.json_url || '';
    if (!jsonUrl) {
      throw new Error('No stored content');
    }

    let importedData;
    try {
      importedData = JSON.parse(jsonUrl);
    } catch (e) {
      throw new Error('Stored content is not valid JSON');
    }

    setShapes(importedData.shapes || []);
    setTitle(importedData.title || 'بدون عنوان');
  } catch (e) {
    console.error('importShapes error:', e);
    alert('خطا در دریافت از سرور: ' + e.message);
  }
}

