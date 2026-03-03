import logo from '@/assets/logo.png';
import homeScreen from '@/assets/screens/home.png';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src={logo} 
            alt="Masterr" 
            className="w-48 md:w-64 lg:w-72 mb-8 opacity-0 animate-fade-up"
          />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            Profesionales confiables para tu hogar
          </h1>
          <p className="text-body text-lg md:text-xl max-w-xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Una experiencia segura y transparente para conectar profesionales y clientes, 
            agilizando la contratación de servicios para el hogar.
          </p>
        </div>

        {/* Right: Phone Mockup */}
        <div className="flex justify-center opacity-0 animate-fade-up animation-delay-200">
          <div className="relative w-[280px] md:w-[300px] lg:w-[320px]">
            <div className="rounded-[2.5rem] overflow-hidden border-[8px] border-foreground/10 shadow-2xl bg-background">
              <img 
                src={homeScreen} 
                alt="Pantalla principal de Masterr" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
