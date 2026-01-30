import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import userFlowDiagram from '@/assets/user-flow-diagram.png';

const UserFlowSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Arquitectura
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            User Flow
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
            Los principales recorridos del usuario dentro de la aplicación, desde el login hasta completar un servicio.
          </p>
        </div>

        <div
          ref={imageRef}
          style={{
            opacity: imageVisible ? 1 : 0,
            transform: imageVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms'
          }}
        >
          <img 
            src={userFlowDiagram} 
            alt="Diagrama de flujo de usuario mostrando los recorridos principales: búsqueda, chat, servicios y perfil"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default UserFlowSection;
