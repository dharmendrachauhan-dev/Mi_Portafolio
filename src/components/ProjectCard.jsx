import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

function ProjectCard({ data }) {
  const { title, description, techStack, status, liveurl, codeurl } = data;

  return (
    <>
      <div
        className="group transition-all overflow-hidden w-full p-4 rounded-xl
       backdrop-blur-sm bg-white border-zinc-200 border 
       hover:border-zinc-300 hover:shadow-sm dark:hover:bg-slate-900/50
       dark:border-zinc-800/50 dark:bg-slate-900/30 dark:hover:border-zinc-700 flex flex-col h-full
       "
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="">
            <StatusBadge status={status} />
          </p>
        </div>
        <div className="mt-6">
          <p className="text-[95%]">{description}</p>
        </div>
        <div className="mt-6 flex gap-2">
          {techStack.map((items, idx) => (
            <p
              key={idx}
              className="bg-slate-300 dark:text-white/90 dark:bg-slate-400 px-2 rounded "
            >
              {items.name}
            </p>
          ))}
        </div>
        <div className="flex mt-6 items-start gap-2">
          <Link
            className="dark:bg-white border bg-black text-white dark:text-slate-900 rounded font-semibold px-4 py-2"
            to={liveurl}
          >
            Live
          </Link>
          <Link
            className="dark:bg-white border border-zinc-800 text-black dark:text-slate-900 rounded font-semibold px-4 py-2"
            target="_blank"
            to={codeurl}
          >
            Code
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
