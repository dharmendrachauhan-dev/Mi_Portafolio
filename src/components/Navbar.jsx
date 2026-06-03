import { useState, useEffect, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { Hamburger } from 'lucide-react';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleButton = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'project', label: 'Project', path: '/project' },
    { id: 'about', label: 'About', path: '/about' },
  ];

  // For Navbar

  const handleButton = () => {
    const next = !isOpen
    setIsOpen(next);
    console.log(isOpen);

    const btn = btnRef.current;
    rotationRef.current += 180;
    btn.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    btn.style.transform = `rotate(${rotationRef.current}deg)`;
  };

  const barBase = "block h-[2px] w-full bg-zinc-800 origin-center"

  return (
    <nav
      className="sticky top-0 max-w-7xl flex justify-between h-20 py-10 items-center px-4
      border-b-2 border-b-orange-400 rounded-xl backdrop-blur-xl z-20 mx-auto">
      <div className="text-xl font-semibold cursor-pointer text-orange-400">
        <Link to='/'> Developer </Link>
      </div>

      {/* For Desktop */}

      <ul className="md:flex hidden gap-4">
        {navLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => {
              if (isActive) {
                return 'border-b-2 text-orange-400 border-slate-200';
              }
              return 'dark:text-white';
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </ul>

      {/* For Mobile */}

      <div
        className={`
    overflow-hidden transition-all duration-300 ease-in-out w-full md:hidden absolute top-full left-0
    ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}
  `}
      >
        <div className='w-full flex flex-col justify-center items-center border-2 py-4 rounded-xl md:hidden dark:bg-slate-900'>
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 text-orange-400 border-slate-200'
                  : 'dark:text-white font-semibold'
              }
            >
              <div className='w-full'>
                {item.label}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={toggleButton}>
          {dark ? (
            <Moon strokeWidth={1.50} size={35} className="text-yellow-400" />
          ) : (
            <Sun strokeWidth={1.50} size={35} className="text-yellow-400" />
          )}
        </button>
        <button
          ref={btnRef}
          onClick={handleButton}
          className="md:hidden flex flex-col justify-center items-center active:scale-98 px-1 gap-2 cursor-pointer border bg-white/90 rounded-xl size-10"
          style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <span
            className={barBase}
            style={{
              transition: isOpen
                ? "transform 0.2s ease 0.35s"
                : "transform 0.2s ease",
              transform: isOpen ? "translateY(10px) rotate(45deg)" : "",
            }}
          />
          <span
            className={barBase}
            style={{
              transition: isOpen
                ? "opacity 0.1s ease 0.35s, transform 0.3s ease 0.35s"
                : "opacity 0.1s ease, transform 0.3s ease",
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scaleX(0)" : "",
            }}
          />
          <span
            className={barBase}
            style={{
              transition: isOpen
                ? "transform 0.2s ease 0.35s"
                : "transform 0.2s ease",
              transform: isOpen ? "translateY(-10px) rotate(-45deg)" : "",
            }}
          />
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
