export function exportShapes(data) {
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.title || 'drawing'}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function importShapes(file, setShapes, setTitle) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const importedData = JSON.parse(reader.result);
      setShapes(importedData.shapes || []);
      setTitle(importedData.title || 'بدون عنوان');
    } catch (error) {
      alert('خطا در خواندن فایل');
    }
  };
  reader.readAsText(file);
}
