const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4 opacity-0 animate-fade-up">
          UX/UI Case Study
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
          Diseñando experiencias que conectan con las personas
        </h1>
        <p className="text-body text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
          Un análisis profundo sobre cómo la investigación de usuarios guía 
          decisiones de diseño efectivas y centradas en el ser humano.
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
