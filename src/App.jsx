import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import BlogPost from './blog/BlogPost.jsx';
// import Hamburger from './ui/Hamburger.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Toaster />
      {/* <Hamburger/> */}
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<ProfileCard />} />
          <Route path="/blog" element={<BlogPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
