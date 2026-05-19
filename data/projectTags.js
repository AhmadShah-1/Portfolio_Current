// data/projectTags.js

// 1) ORDER of categories / tags, you can reorder as needed:
export const categoryOrder = [
  "Professional",
  "Machine Learning",
  "App Development",
  "Web Development",
  "Electronics"
];

// 2) Tag assignment per project (use slug from content/projects/*):
//    Add or update tags for each project. New tags added here will automatically
//    generate sections on the projects page.
export const projectTags = {
  "arduino-based-redundant-transmission": ["Professional", "Electronics"],
  "c-all": ["Professional", "App Development", "Electronics"],
  "dreus-project-nsf": ["Professional", "Machine Learning"],
  "detecting-ai-generated-images-through-spatial-frequency-analysis-and-diffusion-based-reconstruction": ["Professional", "Machine Learning"],
  "fitness-web-application": ["Personal", "Web Development"], // assign tags (e.g. "Machine Learning", "Hardware", ...)
  "health-tracker-app": ["Professional", "Web Development", "App Development"],
  "lidar-robot": ["Professional", "Electronics"],
  "neural-network-application-in-traffic-management": ["Professional", "Machine Learning"],
  "music-recommendation-system": ["Personal", "Machine Learning"],
  "predicting-pre-meal-glucose-using-sparse-optimization-and-time-series-features": ["Personal", "Machine Learning"],
  "real-estate-prediction-nyc": ["Personal", "Machine Learning"],
  "smart-home-automation": ["Personal", "Web Development"],
  "weather-machine": ["Electronics"],
  "ahmad-careers": ["Personal", "Web Development", "Flask", "MySQL", "Bootstrap", "Jinja2"]
};
