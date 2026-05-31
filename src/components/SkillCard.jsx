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
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="dark:text-white px-4 flex items-center py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Globe size={20} /> Web Development
      </motion.h1>
      <TechGrid data={TechData.web} />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Drill size={20} /> Tools and Technology
      </motion.h2>
      <TechGrid data={TechData.tools} />
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <DatabaseZap /> Database And Storage
      </motion.h3>
      <TechGrid data={TechData.database} />
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="dark:text-white flex items-center px-4 py-3 gap-1 text-slate-800/90 text-xl font-semibold tracking-wide"
      >
        <Workflow />
        Devops And Cloud
      </motion.h4>
      <TechGrid data={TechData.devops} />
    </div>
  );
}

export default SkillCard;
