import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Masterr" className="h-10" />
        </a>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            {t('nav.project')}
          </a>
          <a href="#research" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            {t('nav.research')}
          </a>
          <a href="#design" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            {t('nav.design')}
          </a>
          <a href="#testing" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            {t('nav.testing')}
          </a>
          <a href="#prototype" className="text-body hover:text-foreground transition-colors text-sm font-medium">
            {t('nav.prototype')}
          </a>
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold uppercase tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
