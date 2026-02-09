import React from 'react';
import { Copyright } from 'lucide-react';
import { Link } from 'react-router-dom';
import mail from '../assets/icon/discord.png';
import linkedin from '../assets/icon/linkedin-sign.png';
import github from '../assets/icon/github-sign.png';
import { motion } from 'motion/react';

function Footer() {
  return (
    <div
      className="max-w-5xl mx-auto border-t-2 border-t-orange-400 h-full"
    >
      <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex md:flex-row md:justify-between justify-center items-center flex-col gap-2 p-8">
        <div className="md:flex md:gap-0.5 font-semibold text-orange-400 text-center">
          <p className="flex justify-center items-center gap-0.5">
            <Copyright size={15} /> 2026 Dharmendra_Chauhan{' '}
          </p>
          <h1>All Right Reserved</h1>
        </div>

        <div className="flex gap-2">
          <Link target="_blank" to="mailto:dmma359800@gmail.com">
            <div className="transition-all size-8 border-orange-400 bg-orange-400 hover:bg-white hover:border-zinc-500  dark:border-orange-500 dark:hover:border-white dark:hover:bg-white dark:bg-orange-500 border-2 rounded items-center justify-center flex">
              <img
                src={mail}
                className="size-6 dark:bg-orange-400 dark:hover:bg-white rounded-full"
                alt=""
              />
            </div>
          </Link>
          <Link target="_blank" to="https://github.com/dharmendrachauhan-dev">
            <div className="transition-all size-8 border-orange-400 bg-orange-400 hover:bg-white hover:border-zinc-500  dark:border-orange-500 dark:hover:border-white dark:hover:bg-white dark:bg-orange-500 border-2 rounded items-center justify-center flex">
              <img
                src={github}
                className="size-6 dark:bg-orange-400 dark:hover:bg-white rounded-full"
                alt=""
              />
            </div>
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/dharmendraji-dev/">
            <div className="transition-all size-8 border-orange-400 bg-orange-400 hover:bg-white hover:border-zinc-500  dark:border-orange-500 dark:hover:border-white dark:hover:bg-white dark:bg-orange-500 border-2 rounded items-center justify-center flex">
              <img
                src={linkedin}
                className="size-6 dark:bg-orange-400 dark:hover:bg-white rounded-full"
                alt=""
              />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
