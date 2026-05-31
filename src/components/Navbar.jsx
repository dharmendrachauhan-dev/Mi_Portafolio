import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavLink, Link} from 'react-router-dom';
import { Hamburger } from 'lucide-react';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


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
  ];

  // For Navbar

  const handleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
      <nav 
      className="sticky max-w-5xl flex justify-between h-20 py-10 items-center px-4
      border-b-2 border-b-orange-400 backdrop-blur-xl top-0 z-20 mx-auto">
            <div className="text-xl font-semibold cursor-pointer text-orange-400">
             <Link to='/'> Dharmendra </Link>
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

            <div className='absolute top-13 right-19'>
            {isOpen && (
              <ul className='border-2 w-60 h-40 flex flex-col justify-center items-center border-slate-200 rounded-xl'>
                {navLinks.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => {
                      if (isActive) {
                        return 'border-b-2 text-orange-400 border-slate-200';
                      }
                      return 'dark:text-white font-semibold';
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>
            )}
          </div>
            <div className="flex gap-4">
              <button onClick={handleNavbar} className="md:hidden">
                <Hamburger strokeWidth={1.25} className="text-orange-500" />
              </button>
              <button onClick={toggleButton}>
                {dark ? (
                  <Moon strokeWidth={1.25} className="text-orange-500" />
                ) : (
                  <Sun strokeWidth={1.25} className="text-orange-500" />
                )}
              </button>
            </div>
      </nav>
  );
}

export default Navbar;
