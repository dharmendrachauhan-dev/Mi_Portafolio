import TechData from '../Data/TechData';
import TechGrid from './TechGrid';
import { Globe } from 'lucide-react';
import { Drill } from 'lucide-react';
import { DatabaseZap } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { motion } from 'motion/react';

function SkillCard() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <h1
        className="dark:text-white px-4 flex items-center py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Globe size={20} /> Web Development
      </h1>
      <TechGrid data={TechData.web} />
      <h2
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Drill size={20} /> Tools and Technology
      </h2>
      <TechGrid data={TechData.tools} />
      <h3
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <DatabaseZap /> Database And Storage
      </h3>
      <TechGrid data={TechData.database} />
      <h4
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Workflow />
        Devops And Cloud
      </h4>
      <TechGrid data={TechData.devops} />
    </div>
  );
}

export default SkillCard;
