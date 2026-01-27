import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 text-center">
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
        <div className="mt-10 flex gap-4 opacity-0 animate-fade-up animation-delay-300">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-soft text-accent text-sm font-medium">
            Research
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            UX Design
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            UI Design
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
