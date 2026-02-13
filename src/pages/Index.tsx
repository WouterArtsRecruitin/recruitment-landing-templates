import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VersionSwitcher from '@/components/VersionSwitcher';
import HeroA from '@/components/templates/a/HeroA';
import HeroB from '@/components/templates/b/HeroB';
import HeroC from '@/components/templates/c/HeroC';

type Version = 'A' | 'B' | 'C';

const Index = () => {
  const [version, setVersion] = useState<Version>('A');

  const heroComponents = {
    A: <HeroA />,
    B: <HeroB />,
    C: <HeroC />,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <VersionSwitcher current={version} onChange={setVersion} />
      
      <main>
        {heroComponents[version]}
        
        {/* Placeholder voor extra secties */}
        <section id="vacatures" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Vacatures</h2>
            <p className="text-xl text-slate-600 mb-8">
              Voeg hier je vacatures toe
            </p>
          </div>
        </section>

        <section id="over-ons" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Over Ons</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Voeg hier informatie over je bedrijf toe
            </p>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="text-xl text-slate-600 mb-8">
              Voeg hier je contactformulier toe
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
