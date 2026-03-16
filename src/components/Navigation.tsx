import logo from '@/assets/logo.png';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Masterr" className="h-10" />
        </a>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            Proyecto
          </a>
          <a href="#research" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            Research
          </a>
          <a href="#design" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            Diseño
          </a>
          <a href="#testing" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            Testing
          </a>
          <a href="#prototype" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            Prototipo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
