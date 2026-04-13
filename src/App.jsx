import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  // Initialize state from URL hash if it exists, otherwise default to 'home'
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en' or 'nl'

  // Listen for hash changes (e.g., when user clicks back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update the URL hash whenever the page changes
  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedProjectId(null);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const navigateToProject = (id) => {
    setSelectedProjectId(id);
    setCurrentPage('project-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home language={language} setCurrentPage={navigateTo} />;
      case 'about':
        return <About language={language} />;
      case 'projects':
        return <Projects language={language} onProjectClick={navigateToProject} />;
      case 'contact':
        return <Contact language={language} />;
      case 'project-detail':
        return <ProjectDetail language={language} projectId={selectedProjectId} onBack={() => navigateTo('projects')} />;
      default:
        return <Home language={language} setCurrentPage={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={navigateTo} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <div className="pt-16 flex-grow">
        {renderPage()}
      </div>
      <Footer setCurrentPage={navigateTo} />
    </div>
  )
}

export default App
