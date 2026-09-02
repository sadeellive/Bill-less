import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallWidget } from './components/FloatingCallWidget';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { CallModal } from './components/CallModal';

import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { UploadPage } from './pages/UploadPage';
import { ProviderDetailPage } from './pages/ProviderDetailPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NegotiationResultPage } from './pages/NegotiationResultPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { PrivacyPage, TermsPage, DisclaimerPage, AccessibilityPage } from './pages/LegalPages';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    // Provider Detail Routes
    if (currentPath.startsWith('/providers/')) {
      const slug = currentPath.replace('/providers/', '');
      return (
        <ProviderDetailPage 
          slug={slug} 
          navigate={navigate} 
          onOpenCallModal={() => setIsCallModalOpen(true)} 
        />
      );
    }

    // Resource Guide Detail Routes
    if (currentPath.startsWith('/resources/')) {
      const slug = currentPath.replace('/resources/', '');
      return (
        <ResourceDetailPage 
          slug={slug} 
          navigate={navigate} 
          onOpenCallModal={() => setIsCallModalOpen(true)} 
        />
      );
    }

    switch (currentPath) {
      case '/how-it-works':
        return <HowItWorksPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/pricing':
        return <PricingPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/upload':
        return <UploadPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/negotiation-result':
        return <NegotiationResultPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/refund-policy':
        return <RefundPolicyPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/estimator':
        return <EstimatorPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/resources':
        return <ResourcesPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/disclaimer':
        return <DisclaimerPage />;
      case '/accessibility':
        return <AccessibilityPage />;
      case '/':
      default:
        return <HomePage navigate={navigate} onOpenCallModal={() => setIsCallModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-teal selection:text-teal-foreground pb-20 sm:pb-0">
      {/* Header with Call Now button */}
      <Header 
        currentPath={currentPath} 
        navigate={navigate} 
        onOpenCallModal={() => setIsCallModalOpen(true)} 
      />

      {/* Main Routed Page Content */}
      <main className="grow">
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
