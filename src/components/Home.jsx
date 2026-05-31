import SkillCard from './SkillCard.jsx';
import Contact from './Contact.jsx';
import { Settings } from 'lucide-react';
import { BadgeAlert } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { Mail } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { motion } from 'motion/react';
import Footer from './Footer.jsx';

function Home() {
  return (
    <>
      <div className="h-1/2 mt-10 mb-6 text-gray-700/90 dark:bg-slate-900 dark:text-white px-4 sm:px-12 lg:px-24 xl:px-65">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex px-4 items-center gap-1.5 text-2xl tracking-tight font-bold "
        >
          <BadgeAlert strokeWidth={2} size={50} />
          About me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-xl px-4 italic"
        >
          <p>
            I am a{' '}
            <span className="inline-block min-w-[17ch] text-2xl font-bold">
              <Typewriter
                words={['Frontend Developer']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </span>
            with a passion for building scalable and efficient web applications.
            My expertise lies in both frontend development, allowing
            me to create seamless user experiences and robust systems.
          </p>
          <p className="mt-4">
            I enjoy working with the latest technologies and am always eager to
            learn new skills. I believe in the power of collaboration and strive
            to contribute positively to any team I am part of.
          </p>
        </motion.div>
      </div>

      <div className="h-1/2 px-4 sm:px-12 lg:px-24 xl:px-65">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="dark:text-white flex justify-center py-4 items-center gap-2 font-bold text-2xl tracking-wider text-gray-700/90"
        >
          <Settings className="spin" size={45} strokeWidth={2.5} /> Tools And
          Technologies
        </motion.h1>
        <div>
          <SkillCard />
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="dark:text-white pt-10 flex justify-center py-4 items-center gap-2 font-bold text-2xl tracking-wider text-gray-700/90"
          >
            <MessageCircleMore size={40} strokeWidth={2.5} />
            Drop A Message
          </motion.h2>
          <Contact />
        </div>
      </div>
      <div>
          
        </div>
    </>
  );
}

export default Home;
