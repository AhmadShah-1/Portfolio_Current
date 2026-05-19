import { motion } from 'framer-motion';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import ImageGallery from './ImageGallery';
import MDXImage from './MDXImage';
import { Children, isValidElement, useState } from 'react';

// PDF and Jupyter Notebook viewer components
const PDFViewer = ({ file }) => (
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

const NotebookViewer = ({ file }) => {
  return (
    <div className="w-full overflow-hidden rounded-md border border-gray-200 shadow-md bg-white p-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Jupyter Notebook</h3>
          <p className="mt-2 text-gray-600 max-w-md">
            This Jupyter notebook contains the data science code used for the Real Estate Prediction project. 
            It includes data loading, preprocessing, model training, and evaluation.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={file} 
              download
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Notebook
            </a>
            <a 
              href="https://nbviewer.org/github/jupyterlab/jupyterlab-demo/blob/master/notebooks/Lorenz.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Example Notebook
            </a>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Key notebook features:</p>
            <ul className="list-disc list-inside mt-2 text-left max-w-md mx-auto">
              <li>Data loading from NYC Open Data API</li>
              <li>Data cleaning and feature engineering</li>
              <li>Model training with XGBoost, Random Forest</li>
              <li>Hyperparameter tuning</li>
              <li>Model evaluation and visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

// Custom MDX components mapping
const MdxParagraph = ({ children, ...props }) => {
  const childArray = Children.toArray(children);

  if (
    childArray.length === 1 &&
    isValidElement(childArray[0]) &&
    (childArray[0].type === 'img' || childArray[0].type === MDXImage)
  ) {
    return <div className="mb-4" {...props}>{children}</div>;
  }

  return <p className="mb-4 text-lg" {...props}>{children}</p>;
};

const mdxComponents = {
  h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold my-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold my-2" {...props} />,
  p: MdxParagraph,
  ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 pl-4 italic text-gray-600 my-4" {...props} />,
  img: MDXImage,
  DocumentTabs: DocumentTabs,
  PDFViewer: PDFViewer,
  NotebookViewer: NotebookViewer
};

const ProjectContent = ({ project, content }) => {
  const { frontMatter } = project;
  const galleryImages = frontMatter.galleryImages || [];
  const assetImages = frontMatter.assetImages || [];
  const pdfUrl = frontMatter.pdfUrl || '';
  const notebookUrl = frontMatter.notebookUrl || '';
  const isVideo = frontMatter.heroImage && frontMatter.heroImage.endsWith('.mp4');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Image or Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] w-full rounded-lg overflow-hidden"
      >
        {isVideo ? (
          <video
            className="w-full h-full object-contain rounded-lg"
            controls
            poster={
              frontMatter.title === "Health Tracker App" 
                ? "/Assets/Projects/Professional/SSW-322-A-Group-3-Health-Tracker-App/Images/Use Case Diagram.png"
                : null
            }
          >
            <source src={frontMatter.heroImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={frontMatter.heroImage}
            alt={frontMatter.title}
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        )}
      </motion.div>

      {/* Project Title and Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors">
          {frontMatter.title}
        </h1>
        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full">
          {frontMatter.category}
        </span>
        {frontMatter.technologies && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {frontMatter.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
      
      {/* Related Papers Section - Moved to top */}
      {frontMatter.papers && frontMatter.papers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Papers</h2>
          <div className="space-y-2">
            {frontMatter.papers.map((paper, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {paper.name}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Project Repository - Added below Related Papers */}
      {frontMatter.githubUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">Project Repository</h2>
          <div className="flex items-center space-x-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 text-primary flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <a
              href={frontMatter.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      )}

      {/* Document preview area */}
      {frontMatter.title === "Real Estate Prediction in NYC" && pdfUrl && notebookUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <DocumentTabs 
            pdfFile={pdfUrl}
            notebookFile={notebookUrl}
          />
        </motion.div>
      )}

      {frontMatter.title !== "Real Estate Prediction in NYC" && pdfUrl && !notebookUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">Paper Preview</h2>
          <PDFViewer file={pdfUrl} />
        </motion.div>
      )}

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        <MDXRemote {...content} components={mdxComponents} />
      </motion.div>

      {/* Image Gallery */}
      {galleryImages && galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <ImageGallery images={galleryImages} />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectContent; 
