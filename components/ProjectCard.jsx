import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ImageCarousel from './ImageCarousel';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    heroImage,
    galleryImages,
    technologies,
    category,
    slug
  } = project;

  const isVideo = heroImage.endsWith('.mp4');
  const isFitnessApp = title === "Fitness Web Application";

  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      >
        <div className="relative">
          <div className="relative h-64 w-full">
            {isFitnessApp && isVideo ? (
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                poster={`/Assets/Projects/${category}/${title.replace(/ /g, '')}/Images/1.png`}
                muted
                loop
                playsInline
                autoPlay
              >
                <source src={heroImage} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="h-full">
                {galleryImages && galleryImages.length > 0 ? (
                  <ImageCarousel images={galleryImages} />
                ) : (
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            )}
          </div>
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm z-10">
            {category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          {technologies && technologies.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    +{technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <span className="text-primary font-medium">View Details →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard; 