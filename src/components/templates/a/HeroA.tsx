import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyConfig } from '@/data/config';

const HeroA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {companyConfig.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {companyConfig.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Bekijk Vacatures
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Meer Over Ons
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroA;
