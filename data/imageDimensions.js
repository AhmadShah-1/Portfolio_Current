const imageDimensions = {
  '/Assets/Projects/Personal/Mercury/Images/1.png': { width: 1904, height: 809 },
  '/Assets/Projects/Personal/Mercury/Images/2.png': { width: 1918, height: 913 },
  '/Assets/Projects/Personal/Mercury/Images/3.png': { width: 881, height: 601 },
  '/Assets/Projects/Personal/Mercury/Images/4.png': { width: 1901, height: 911 },
};

export function getImageDimensions(src) {
  return imageDimensions[src];
}
