import ProjectCard from './ProjectCard.jsx';
import ProjectData from '../Data/Project_Card_Data/ProjectData.js';
import { motion } from 'motion/react';
import ProjectIcon from './ProjectIcon.jsx';

function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <ProjectIcon />
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 py-4 gap-4  px-4">
        {ProjectData.map((item) => (
          <div  
            className="h-full"
          >
            <ProjectCard key={item.id} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
