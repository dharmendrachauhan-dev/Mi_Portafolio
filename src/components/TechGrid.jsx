import React from 'react';
import { motion } from 'motion/react';

function TechGrid({ data }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 px-4 gap-2.5">
        {data.map((item, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center p-4 gap-4 border cursor-pointer duration-300 rounded-xl
               bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm dark:hover:bg-slate-900/50
               dark:border-zinc-800/50 dark:bg-slate-900/30 dark:hover:border-zinc-700 "
              >
              <div>
                <img
                  src={item.image}
                  className="size-8 object-contain rounded-full md:size-10 dark:bg-white"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-medium dark:text-white text-slate-700/90">
                  {item.name}
                </h1>
                <p className="font-light italic text-sm">{item.details}</p>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default TechGrid;
