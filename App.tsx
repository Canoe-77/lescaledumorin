import { Hero } from './components/Hero'
import { InfoSection } from './components/InfoSection'
import { MenuSection } from './components/MenuSection'
import { VisualizerSection } from './components/VisualizerSection'
import { GroupSection } from './components/GroupSection'
import { CanoeSection } from './components/SecondarySections'
import { ReviewsSection } from './components/SecondarySections'
import { Footer } from './components/Footer'
import { FloatingCallButton } from './components/FloatingCallButton'
function App() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-100 flex flex-col">
      <Hero />
      <div style={{ height: 20 }} />
<InfoSection />
<MenuSection />
<VisualizerSection />
<GroupSection />
<CanoeSection />
<ReviewsSection />
<Footer />
<FloatingCallButton />
    </div>
  )
}

export default App