import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyConfig } from '@/data/config';
import { ArrowRight } from 'lucide-react';

const HeroB = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              ✨ Werken bij {companyConfig.name}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {companyConfig.tagline}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {companyConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 font-semibold">
                Start Je Carrière
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20">
                Ontdek Meer
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center text-white/50 text-2xl font-bold">
                Afbeelding
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroB;
