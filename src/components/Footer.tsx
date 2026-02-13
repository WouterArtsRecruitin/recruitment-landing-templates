import { companyConfig } from '@/data/config';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">{companyConfig.name}</h3>
            <p className="text-sm">{companyConfig.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>{companyConfig.email}</p>
              <p>{companyConfig.phone}</p>
              <p>{companyConfig.address}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#vacatures" className="block hover:text-white transition-colors">Vacatures</a>
              <a href="#over-ons" className="block hover:text-white transition-colors">Over Ons</a>
              <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {companyConfig.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
