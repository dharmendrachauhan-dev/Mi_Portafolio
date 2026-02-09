import ProjectCard from './ProjectCard.jsx';
import ProjectData from '../Data/Project_Card_Data/ProjectData.js';
import { motion } from 'motion/react';
import ProjectIcon from './ProjectIcon.jsx';

function Project() {
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <ProjectIcon />
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 py-4 gap-4  px-4">
        {ProjectData.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard key={item.id} data={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
