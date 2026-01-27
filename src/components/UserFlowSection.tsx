import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, MessageCircle, Home, Users, User, Search, UserCheck, Send, CheckCircle, Star } from 'lucide-react';

interface FlowStepProps {
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary' | 'action' | 'end';
}

const FlowStep = ({ icon, label, variant = 'primary' }: FlowStepProps) => {
  const variantStyles = {
    primary: 'bg-accent text-accent-foreground',
    secondary: 'bg-primary text-primary-foreground',
    action: 'bg-[hsl(280,60%,60%)] text-white',
    end: 'bg-[hsl(12,76%,50%)] text-white',
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${variantStyles[variant]} text-sm font-medium whitespace-nowrap`}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

const FlowArrow = () => (
  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
);

interface FlowRowProps {
  title: string;
  steps: { icon: React.ReactNode; label: string; variant?: 'primary' | 'secondary' | 'action' | 'end' }[];
  delay: number;
}

const FlowRow = ({ title, steps, delay }: FlowRowProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      <span className="text-body text-sm font-medium">{title}</span>
      <div className="flex items-center gap-3 flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <FlowStep icon={step.icon} label={step.label} variant={step.variant} />
            {index < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
    </div>
  );
};

const UserFlowSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const flows = [
    {
      title: 'Flujo de búsqueda',
      steps: [
        { icon: <Home className="w-4 h-4" />, label: 'Home', variant: 'primary' as const },
        { icon: <Search className="w-4 h-4" />, label: 'Elegir rubro', variant: 'secondary' as const },
        { icon: <Users className="w-4 h-4" />, label: 'Lista prestadores', variant: 'action' as const },
        { icon: <UserCheck className="w-4 h-4" />, label: 'Perfil prestador', variant: 'action' as const },
        { icon: <Send className="w-4 h-4" />, label: 'Enviar mensaje', variant: 'secondary' as const },
      ],
    },
    {
      title: 'Flujo de chat',
      steps: [
        { icon: <MessageCircle className="w-4 h-4" />, label: 'Mis Chats', variant: 'primary' as const },
        { icon: <MessageCircle className="w-4 h-4" />, label: 'Chat prestador', variant: 'action' as const },
        { icon: <CheckCircle className="w-4 h-4" />, label: 'Acordar condiciones', variant: 'secondary' as const },
        { icon: <CheckCircle className="w-4 h-4" />, label: 'Aceptar visita', variant: 'action' as const },
      ],
    },
    {
      title: 'Flujo de servicios',
      steps: [
        { icon: <Users className="w-4 h-4" />, label: 'Mis Prestadores', variant: 'primary' as const },
        { icon: <Users className="w-4 h-4" />, label: 'Historial', variant: 'action' as const },
        { icon: <CheckCircle className="w-4 h-4" />, label: 'Finalizar servicio', variant: 'secondary' as const },
        { icon: <Star className="w-4 h-4" />, label: 'Dejar reseña', variant: 'action' as const },
        { icon: <CheckCircle className="w-4 h-4" />, label: 'FIN', variant: 'end' as const },
      ],
    },
    {
      title: 'Flujo de perfil',
      steps: [
        { icon: <User className="w-4 h-4" />, label: 'Perfil', variant: 'primary' as const },
        { icon: <User className="w-4 h-4" />, label: 'Editar perfil', variant: 'secondary' as const },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-16"
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

        {/* Entry point */}
        <div 
          className="flex justify-center mb-10"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 100ms'
          }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Iniciar sesión / Registrarse
            </div>
          </div>
        </div>

        {/* Flow rows */}
        <div className="bg-surface-elevated rounded-2xl p-8 shadow-sm border border-border space-y-8">
          {flows.map((flow, index) => (
            <FlowRow
              key={index}
              title={flow.title}
              steps={flow.steps}
              delay={200 + index * 100}
            />
          ))}
        </div>

        {/* Legend */}
        <div 
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
          style={{
            opacity: titleVisible ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent" />
            <span className="text-body">Pantalla principal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary" />
            <span className="text-body">Acción</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[hsl(280,60%,60%)]" />
            <span className="text-body">Pantalla secundaria</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[hsl(12,76%,50%)]" />
            <span className="text-body">Fin del flujo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlowSection;
