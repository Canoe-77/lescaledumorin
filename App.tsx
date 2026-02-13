import React from 'react';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { MenuSection } from './components/MenuSection';
import { GroupSection } from './components/GroupSection';
import { CanoeSection, ReviewsSection } from './components/SecondarySections';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { VisualizerSection } from './components/VisualizerSection';

function App() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-100 flex flex-col font-sans selection:bg-[#b91c1c] selection:text-white">
      <Hero />
      <InfoSection />
      <MenuSection />
      <VisualizerSection />
      <GroupSection />
      <CanoeSection />
      <ReviewsSection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;