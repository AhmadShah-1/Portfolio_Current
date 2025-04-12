import React from 'react';

const PDFViewer = ({ file }) => {
  return (
    <div className="w-full overflow-hidden rounded-md border border-gray-200 shadow-md">
      <iframe
        src={file}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="PDF Viewer"
        className="w-full"
      />
    </div>
  );
};

export default PDFViewer; 