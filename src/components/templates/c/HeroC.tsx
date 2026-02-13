import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyConfig } from '@/data/config';

const HeroC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg tracking-wide uppercase">
                {companyConfig.name}
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              {companyConfig.tagline}
            </h1>
            <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
              {companyConfig.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Bekijk Vacatures
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Opnemen
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center gap-8 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Professioneel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Betrouwbaar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Innovatief</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-slate-50 to-transparent hidden lg:block" />
    </section>
  );
};

export default HeroC;
