import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PainSection from '@/components/sections/PainSection';
import RepositioningSection from '@/components/sections/RepositioningSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-yealink-text selection:bg-yealink-green selection:text-yealink-dark-blue">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <RepositioningSection />
        <PortfolioSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}