import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 text-center">
      <div className="max-w-4xl flex flex-col items-center">
        <img 
          src={logo} 
          alt="Masterr" 
          className="w-64 md:w-80 lg:w-96 mb-10 opacity-0 animate-fade-up"
        />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
          Profesionales confiables para tu hogar
        </h1>
        <p className="text-body text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
          Una experiencia segura y transparente para conectar profesionales y clientes, 
          agilizando la contratación de servicios para el hogar.
        </p>
        
        {/* Project Info */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 opacity-0 animate-fade-up animation-delay-300">
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Herramientas</h3>
            <p className="text-body text-sm">Figma, Illustrator, Google Forms</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Contexto</h3>
            <p className="text-body text-sm">Proyecto educativo de la diplomatura Diseño UX/UI de la UTN</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Equipo</h3>
            <p className="text-body text-sm">Victoria Ecalle, Juana Fuertes, Lisandro Perrone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
