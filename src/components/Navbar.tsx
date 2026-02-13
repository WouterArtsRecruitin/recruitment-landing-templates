import { companyConfig } from '@/data/config';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="font-bold text-xl text-foreground">
            {companyConfig.name}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#vacatures" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Vacatures
            </a>
            <a href="#over-ons" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Over Ons
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
