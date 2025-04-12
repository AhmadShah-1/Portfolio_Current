import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import NotebookViewer from './NotebookViewer';

const DocumentTabs = ({ pdfFile, notebookFile }) => {
  const [activeTab, setActiveTab] = useState('pdf');

  return (
    <div className="w-full mb-8">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'pdf'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('pdf')}
        >
          Research Paper
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'notebook'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('notebook')}
        >
          Jupyter Notebook
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'pdf' && <PDFViewer file={pdfFile} />}
        {activeTab === 'notebook' && <NotebookViewer file={notebookFile} />}
      </div>
    </div>
  );
};

export default DocumentTabs; 