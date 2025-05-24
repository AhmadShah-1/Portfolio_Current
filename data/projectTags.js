// data/projectTags.js

// 1) ORDER of categories / tags, you can reorder as needed:
export const categoryOrder = [
  "Professional",
  "Machine Learning",
  "App Development",
  "Web Development",
  "Hardware",
  "Electronics"
];

// 2) Tag assignment per project (use slug from content/projects/*):
//    Add or update tags for each project. New tags added here will automatically
//    generate sections on the projects page.
export const projectTags = {
  "arduino-based-redundant-transmission": ["Professional", "Hardware", "Electronics"],
  "c-all": ["Professional", "App Development", "Electronics"],
  "dreus-project-nsf": ["Professional", "Machine Learning"],
  "fitness-web-application": ["Web Development"], // assign tags (e.g. "Machine Learning", "Hardware", ...)
  "health-tracker-app": ["Professional", "Web Development", "App Development"],
  "lidar-robot": ["Professional", "Hardware", "Electronics"],
  "real-estate-prediction-nyc": ["Machine Learning"],
  "smart-home-automation": ["Web Development"],
  "weather-machine": ["Hardware", "Electronics"]
};
