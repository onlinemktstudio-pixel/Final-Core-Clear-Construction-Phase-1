
import React, { useState } from 'react';
import { Page } from './types';
import { COLORS } from './constants';
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Progress from './pages/Progress';
import Roadmap from './pages/Roadmap';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ImageViewer from './components/ImageViewer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Dashboard: return <Dashboard onImageClick={setSelectedImage} />;
      case Page.Finance: return <Finance onImageClick={setSelectedImage} />;
      case Page.Progress: return <Progress onImageClick={setSelectedImage} />;
      case Page.Roadmap: return <Roadmap />;
      case Page.Profile: return <Profile />;
      default: return <Dashboard onImageClick={setSelectedImage} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block">
        <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 overflow-y-auto pb-24 md:pb-6 px-4 pt-4 md:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {renderPage()}
          </div>
        </main>

        {/* Bottom Navigation for Mobile */}
        <div className="md:hidden">
          <BottomNav activePage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>

      {selectedImage && (
        <ImageViewer 
          url={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default App;
