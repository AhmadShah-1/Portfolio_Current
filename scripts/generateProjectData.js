const fs = require('fs');
const path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isFile());
}

function parseProjectInfo(projectPath, category) {
  const projectName = path.basename(projectPath);
  const projectData = {
    title: projectName.replace(/-/g, ' '),
    category,
    images: [],
    description: '',
    technologies: [],
    links: {},
    papers: [],
    additionalInfo: {}
  };

  // Get images
  const imagesPath = path.join(projectPath, 'Images');
  if (fs.existsSync(imagesPath)) {
    projectData.images = getFiles(imagesPath)
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `/Assets/Projects/${category}/${projectName}/Images/${file}`);
  }

  // Get papers
  const papersPath = path.join(projectPath, 'Papers');
  if (fs.existsSync(papersPath)) {
    projectData.papers = getFiles(papersPath)
      .filter(file => /\.(pdf|doc|docx)$/i.test(file))
      .map(file => ({
        name: file.replace(/\.[^/.]+$/, ''),
        url: `/Assets/Projects/${category}/${projectName}/Papers/${file}`
      }));
  }

  // Get info
  const infoPath = path.join(projectPath, 'Info');
  if (fs.existsSync(infoPath)) {
    const infoFiles = getFiles(infoPath);
    infoFiles.forEach(file => {
      const content = fs.readFileSync(path.join(infoPath, file), 'utf8');
      const fileName = file.toLowerCase();

      if (fileName.includes('description')) {
        projectData.description = content.trim();
      }
      else if (fileName.includes('technologies')) {
        projectData.technologies = content.trim().split('\n').map(tech => tech.trim());
      }
      else if (fileName.includes('links')) {
        const links = content.trim().split('\n');
        links.forEach(link => {
          const [type, url] = link.split(':').map(s => s.trim());
          projectData.links[type.toLowerCase()] = url;
        });
      }
      else {
        // Store any additional info files
        const infoKey = path.basename(file, path.extname(file)).toLowerCase();
        projectData.additionalInfo[infoKey] = content.trim();
      }
    });
  }

  // If there are papers, add them to links
  if (projectData.papers.length > 0) {
    projectData.links.papers = projectData.papers;
  }

  return projectData;
}

function generateProjectData() {
  const projectsPath = path.join(__dirname, '..', 'Assets', 'Projects');
  const categories = getDirectories(projectsPath);
  const projects = {};

  categories.forEach(category => {
    const categoryPath = path.join(projectsPath, category);
    const projectFolders = getDirectories(categoryPath);
    
    projects[category.toLowerCase()] = projectFolders.map(project => 
      parseProjectInfo(path.join(categoryPath, project), category)
    );
  });

  // Write to file
  const outputPath = path.join(__dirname, '..', 'data', 'projects.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
  
  console.log('Project data generated successfully!');
}

generateProjectData(); 