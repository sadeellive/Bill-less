import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallWidget } from './components/FloatingCallWidget';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { CallModal } from './components/CallModal';

import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { ProvidersPage } from './pages/ProvidersPage';
import { ProviderDetailPage } from './pages/ProviderDetailPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { UploadPage } from './pages/UploadPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPages } from './pages/LegalPages';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);

  // Sync with browser history popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
  };

  const renderCurrentPage = () => {
    // Route matching
    if (currentPath === '/' || currentPath === '') {
      return <HomePage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/how-it-works') {
      return <HowItWorksPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/pricing') {
      return <PricingPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/providers') {
      return <ProvidersPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath.startsWith('/providers/')) {
      const slug = currentPath.replace('/providers/', '');
      return <ProviderDetailPage slug={slug} navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/calculator' || currentPath === '/estimator') {
      return <EstimatorPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/resources') {
      return <ResourcesPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath.startsWith('/resources/')) {
      const slug = currentPath.replace('/resources/', '');
      return <ResourceDetailPage slug={slug} navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/upload') {
      return <UploadPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/faq') {
      return <FAQPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
    if (currentPath === '/terms') {
      return <LegalPages pageType="terms" navigate={navigate} />;
    }
    if (currentPath === '/privacy') {
      return <LegalPages pageType="privacy" navigate={navigate} />;
    }
    if (currentPath === '/disclosures') {
      return <LegalPages pageType="disclosures" navigate={navigate} />;
    }
    if (currentPath === '/accessibility') {
      return <LegalPages pageType="accessibility" navigate={navigate} />;
    }
    if (currentPath === '/do-not-sell') {
      return <LegalPages pageType="do-not-sell" navigate={navigate} />;
    }

    // Default fallback to HomePage
    return <HomePage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-teal selection:text-teal-foreground pb-20 sm:pb-0">
      {/* Header with Call Now button */}
      <Header 
        currentPath={currentPath} 
        navigate={navigate} 
        onOpenCallModal={() => setIsCallModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main id="main" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Mobile Sticky Pill Call Button (Strictly Mobile View) */}
      <MobileStickyCallBar />

      {/* Floating Sticky Call Widget (Desktop View) */}
      <FloatingCallWidget onOpenCallModal={() => setIsCallModalOpen(true)} />

      {/* Quick Direct Call & Callback Modal */}
      <CallModal 
        isOpen={isCallModalOpen} 
        onClose={() => setIsCallModalOpen(false)} 
      />
    </div>
  );
}

export default App;
