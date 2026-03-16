import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.project': { en: 'Project', es: 'Proyecto' },
  'nav.research': { en: 'Research', es: 'Research' },
  'nav.design': { en: 'Design', es: 'Diseño' },
  'nav.testing': { en: 'Testing', es: 'Testing' },
  'nav.prototype': { en: 'Prototype', es: 'Prototipo' },

  // Hero
  'hero.title': { en: 'Trusted professionals for your home', es: 'Profesionales confiables para tu hogar' },
  'hero.description': {
    en: 'A safe and transparent experience to connect professionals and clients, streamlining the hiring of home services.',
    es: 'Una experiencia segura y transparente para conectar profesionales y clientes, agilizando la contratación de servicios para el hogar.',
  },

  // About
  'about.title': { en: 'What is it about?', es: '¿De qué se trata?' },
  'about.description': {
    en: 'Masterr is an app that connects people who need home services with trusted professionals in the community.',
    es: 'Masterr es una app que conecta personas que necesitan servicios para el hogar con profesionales confiables dentro de la comunidad.',
  },
  'about.objectiveLabel': { en: 'Presentation Objective', es: 'Objetivo de la presentación' },
  'about.objectiveText': {
    en: 'Show the UX process behind Masterr, from the problem to the final solution, and explain the design decisions made.',
    es: 'Mostrar el proceso de UX detrás de Masterr, desde el problema hasta la solución final, y explicar las decisiones de diseño tomadas.',
  },
  'about.utn': { en: 'UX/UI Design Certificate — UTN Buenos Aires', es: 'Diplomatura en Diseño UX/UI — UTN Buenos Aires' },

  // Research
  'research.methodLabel': { en: 'Methodology', es: 'Metodología' },
  'research.title': { en: 'Quantitative and Qualitative Research', es: 'Investigación Cuantitativa y Cualitativa' },
  'research.description': {
    en: 'We combined quantitative and qualitative methods to understand the needs, behaviors, and motivations of people when hiring a service provider for their home.',
    es: 'Combinamos métodos cuantitativos y cualitativos para aprender las necesidades, comportamientos y motivaciones de las personas a la hora de contratar a un prestador para su hogar.',
  },
  'research.surveysTitle': { en: 'Surveys', es: 'Encuestas' },
  'research.sampleSize': { en: 'Sample size: 50 participants.', es: 'Tamaño de muestra: 50 participantes.' },
  'research.interviewsTitle': { en: 'Interviews', es: 'Entrevistas' },
  'research.interviewSample': { en: 'Sample size: 3 participants.', es: 'Tamaño de muestra: 3 participantes.' },

  // Survey chart titles
  'survey.q1.title': { en: 'What type of service do you hire most often?', es: '¿Qué tipo de servicio contratás más seguido?' },
  'survey.q1.desc': { en: 'Most demanded services by surveyed users', es: 'Servicios más demandados por los usuarios encuestados' },
  'survey.q2.title': { en: 'How do you find service providers?', es: '¿Cómo encontrás el contacto de los prestadores?' },
  'survey.q2.desc': { en: 'Professional discovery channels', es: 'Canales de descubrimiento de profesionales' },
  'survey.q3.title': { en: 'What do you value most when hiring?', es: '¿Qué tenés más en cuenta a la hora de contratar?' },
  'survey.q3.desc': { en: 'Most important decision factors', es: 'Factores de decisión más importantes' },

  // Survey bar labels
  'bar.plumbing': { en: 'Plumbing & gas', es: 'Plomería y gas' },
  'bar.masonry': { en: 'Masonry', es: 'Albañilería' },
  'bar.appliances': { en: 'Appliance repair', es: 'Reparación electrodomésticos' },
  'bar.electrical': { en: 'Electrical', es: 'Electricidad' },
  'bar.painting': { en: 'Painting', es: 'Pintura' },
  'bar.moving': { en: 'Moving', es: 'Mudanzas' },
  'bar.referrals': { en: 'Referrals from acquaintances', es: 'Referencia de conocidos' },
  'bar.social': { en: 'Social media', es: 'Redes sociales' },
  'bar.signs': { en: 'Street signs', es: 'Carteles callejeros' },
  'bar.realEstate': { en: 'Real estate recommendation', es: 'Recomendación inmobiliaria' },
  'bar.reputation': { en: 'Reputation / Reviews', es: 'Reputación / Opiniones' },
  'bar.price': { en: 'Price', es: 'Precio' },
  'bar.experience': { en: 'Experience', es: 'Experiencia' },
  'bar.availability': { en: 'Availability', es: 'Disponibilidad' },
  'bar.certifications': { en: 'Certifications / Licenses', es: 'Certificaciones / Licencias' },

  // Insight cards
  'insight.1.title': {
    en: 'I struggle to find someone with good references.',
    es: 'Me cuesta encontrar a alguien con buenas referencias.',
  },
  'insight.1.desc': {
    en: 'People prioritize hiring recommended professionals or those with a good track record and distrust open internet searches.',
    es: 'Las personas priorizan contratar profesionales recomendados o con buen historial y desconfían de la búsqueda abierta en internet.',
  },
  'insight.2.title': {
    en: 'The work took longer than expected and all the extra fixes went unrecorded.',
    es: 'El trabajo se hizo más largo de lo esperado y todos los arreglos extras quedaron sin registrar.',
  },
  'insight.2.desc': {
    en: 'Changes often come up during work, and if they aren\'t recorded, they lead to confusion.',
    es: 'Durante el trabajo suelen aparecer cambios, y si no quedan registrados terminan en confusiones.',
  },
  'insight.3.title': {
    en: 'It should be like a Rappi for services, Mercado Libre style.',
    es: 'Tendría que ser como un Rappi de servicios tipo Mercado Libre.',
  },
  'insight.3.desc': {
    en: 'People seek a faster and more efficient experience, with clear deadlines and agreements.',
    es: 'Las personas buscan una experiencia más rápida y eficiente, con plazos y acuerdos claros.',
  },

  // User Persona
  'persona.label': { en: 'User Persona', es: 'User Persona' },
  'persona.title': { en: 'Getting to Know Our Users', es: 'Conociendo a Nuestros Usuarios' },
  'persona.description': {
    en: 'Based on our research, we created representative personas that help us empathize with the real needs of our users.',
    es: 'Basado en nuestra investigación, creamos personas representativas que nos ayudan a empatizar con las necesidades reales de nuestros usuarios.',
  },
  'persona.quote': {
    en: '"I work long hours and need quick, reliable solutions."',
    es: '"Trabajo muchas horas y necesito soluciones rápidas y confiables."',
  },
  'persona.bioLabel': { en: 'Bio', es: 'Bio' },
  'persona.bio': {
    en: 'University and private math teacher. Lives with her partner in Rosario, SF. Her daily work schedule is usually long, leaving her little free time.',
    es: 'Profesora universitaria y particular de Matemáticas. Vive con su pareja en Rosario, SF. Su jornada laboral diaria suele ser extensa dejándole poco tiempo libre.',
  },
  'persona.age': { en: '37 years old · Teacher', es: '37 años · Profesora' },
  'persona.skillsLabel': { en: 'Skills', es: 'Habilidades' },
  'persona.skill1': { en: 'Skilled at home cost analysis', es: 'Hábil para análisis de costos del hogar' },
  'persona.skill2': { en: 'Proficient with office software', es: 'Competente para el office software' },
  'persona.skill3': { en: 'Used to working with groups', es: 'Acostumbrada a trabajar con grupos' },
  'persona.goalsLabel': { en: 'Goals', es: 'Objetivos y metas' },
  'persona.goal1': {
    en: 'Quickly and effectively solve everyday problems to optimize personal time.',
    es: 'Resolver rápida y efectivamente sus problemas cotidianos para optimizar su tiempo personal.',
  },
  'persona.goal2': {
    en: 'Build collaborative and trustworthy networks with others in various areas.',
    es: 'Tramar redes colaborativas y confiables con otras personas en diversos ámbitos.',
  },
  'persona.motivationsLabel': { en: 'Motivations', es: 'Motivaciones' },
  'persona.motivation1': { en: 'Referrals from acquaintances', es: 'Referencia de conocidos' },
  'persona.motivation2': { en: 'Cost transparency', es: 'Transparencia de costos' },
  'persona.motivation3': { en: 'Commitment to the task', es: 'Compromiso con el encargo' },
  'persona.motivation4': { en: 'Quick response time', es: 'Rapidez de respuesta' },
  'persona.frustLabel': { en: 'Frustrations', es: 'Frustraciones' },
  'persona.frust1': { en: 'Delayed responses', es: 'Demora en la respuesta' },
  'persona.frust2': { en: 'Lack of communication', es: 'Falta de comunicación' },
  'persona.frust3': { en: 'Cost overruns', es: 'Sobrecostos' },
  'persona.frust4': { en: 'Lack of guarantee and durability of repairs', es: 'Falta de garantía y durabilidad del arreglo' },

  // Benchmark
  'benchmark.label': { en: 'Competitive Analysis', es: 'Análisis Competitivo' },
  'benchmark.title': { en: 'Benchmarking', es: 'Benchmarking' },
  'benchmark.description': {
    en: 'We analyzed the main platforms in the market to identify differentiation opportunities and best practices.',
    es: 'Analizamos las principales plataformas del mercado para identificar oportunidades de diferenciación y mejores prácticas.',
  },
  'benchmark.visual': { en: 'Visual', es: 'Visual' },
  'benchmark.interaction': { en: 'Interaction', es: 'Interacción' },
  'benchmark.vocabulary': { en: 'Vocabulary', es: 'Vocabulario' },
  'benchmark.visual.tutti': {
    en: 'Good overall readability, but with poor space distribution and contrast issues between background and text affecting visual hierarchy.',
    es: 'Buena legibilidad general, pero con mala distribución del espacio y problemas de contraste entre fondo y texto que afectan la jerarquía visual.',
  },
  'benchmark.visual.manno': {
    en: 'Balanced design, consistent across screens, good use of space and adequate contrast; has slight occasional misalignments.',
    es: 'Diseño equilibrado, coherente entre pantallas, buen uso del espacio y contraste adecuado; presenta leves desalineaciones puntuales.',
  },
  'benchmark.visual.justlife': {
    en: 'Visually cluttered interface, with excessive information and mixed formats (icons, images, reels) creating noise and overstimulation.',
    es: 'Interfaz visualmente cargada, con exceso de información y mezcla de formatos (íconos, imágenes, reels) que generan ruido y sensación de sobreestimulación.',
  },
  'benchmark.interaction.tutti': {
    en: 'Extensive registration and service request process (many steps), making the journey longer and less efficient compared to competitors.',
    es: 'Registro y solicitud de servicio extensos (muchos pasos), lo que hace el recorrido más largo y menos eficiente frente a la competencia.',
  },
  'benchmark.interaction.manno': {
    en: 'Agile and optimized flow, with few steps for login, registration and requests, improving journey efficiency.',
    es: 'Flujo ágil y optimizado, con pocos pasos en log in, registro y solicitud, lo que mejora la eficiencia del recorrido.',
  },
  'benchmark.interaction.justlife': {
    en: 'Simple login and registration, but more extensive service request process with multiple decisions at each stage.',
    es: 'Log in y registro simples, pero proceso de solicitud de servicio más extenso y con múltiples decisiones en cada etapa.',
  },
  'benchmark.vocabulary.tutti': {
    en: 'Direct and intuitive, with clear categories; however, repetitions in empty states create minor comprehension conflicts.',
    es: 'Directo e intuitivo, con categorías claras; sin embargo, repeticiones en estados vacíos generan pequeños conflictos de comprensión.',
  },
  'benchmark.vocabulary.manno': {
    en: 'Clear and consistent with user actions, although there is a specific error in labels like "quote" that don\'t exactly fulfill their function.',
    es: 'Claro y consistente con la acción del usuario, aunque existe un error puntual en etiquetas como "presupuestar" que no cumplen exactamente su función.',
  },
  'benchmark.vocabulary.justlife': {
    en: 'Direct and understandable, although the amount of information and simultaneous options can be overwhelming.',
    es: 'Directo y comprensible, aunque la cantidad de información y opciones simultáneas puede resultar abrumadora.',
  },

  // User Flow
  'userflow.label': { en: 'Architecture', es: 'Arquitectura' },
  'userflow.title': { en: 'User Flow', es: 'User Flow' },
  'userflow.description': {
    en: 'The main user journeys within the app, from login to completing a service.',
    es: 'Los principales recorridos del usuario dentro de la aplicación, desde el login hasta completar un servicio.',
  },

  // Moodboard
  'moodboard.label': { en: 'Inspiration', es: 'Inspiración' },
  'moodboard.title': { en: 'Moodboard', es: 'Moodboard' },
  'moodboard.description': {
    en: 'Visual references that guide the product\'s identity and tone.',
    es: 'Referencias visuales que guían la identidad y el tono del producto.',
  },

  // Product Showcase
  'product.label': { en: 'Product', es: 'Producto' },
  'product.title': { en: 'Main App Flow', es: 'Flujo principal de la app' },
  'product.description': {
    en: 'A simple and transparent journey from search to final review.',
    es: 'Un recorrido simple y transparente desde la búsqueda hasta la reseña final.',
  },
  'product.screen1.desc': { en: 'Search for providers of the service you need', es: 'Buscá prestadores del servicio que necesites' },
  'product.screen1.pain': { en: 'Scattered search channels', es: 'Dispersión de canales de búsqueda' },
  'product.screen1.solution': { en: 'All options in one place', es: 'Toda la oferta en un solo lugar' },
  'product.screen2.desc': { en: 'Check their profile and reviews', es: 'Revisá su perfil y reseñas' },
  'product.screen2.pain1': { en: 'Dependence on word of mouth', es: 'Dependencia del boca a boca' },
  'product.screen2.solution1': { en: 'Verified community reviews', es: 'Reseñas verificadas de la comunidad' },
  'product.screen2.pain2': { en: 'Uncertainty about expected cost', es: 'Desconocimiento sobre el costo esperado' },
  'product.screen2.solution2': { en: 'Visible average rate for informed decisions', es: 'Tarifa promedio visible para decisiones informadas' },
  'product.screen3.desc': { en: 'Agree on conditions and start the service', es: 'Pactá condiciones y comenzá el servicio' },
  'product.screen3.pain1': { en: 'Fragmented communication', es: 'Comunicación fragmentada' },
  'product.screen3.solution1': { en: 'Integrated messaging with the provider', es: 'Mensajería integrada con el prestador' },
  'product.screen3.pain2': { en: 'Misaligned expectations between client and professional', es: 'Expectativas no alineadas entre cliente y profesional' },
  'product.screen3.solution2': { en: 'Service conditions agreed upon before starting', es: 'Condiciones del servicio acordadas antes de comenzar' },
  'product.screen4.desc': { en: 'Access service details and leave your review', es: 'Accedé al detalle del servicio y finalizá dejando tu reseña' },
  'product.screen4.pain': { en: 'Perception of arbitrary costs', es: 'Percepción de costos arbitrarios' },
  'product.screen4.solution': { en: 'History with rate breakdown', es: 'Historial con desglose de tarifas' },

  // User Testing
  'testing.label': { en: 'Validation', es: 'Validación' },
  'testing.title': { en: 'User Testing', es: 'User Testing' },
  'testing.description': {
    en: 'Key findings from user tests and how we iterated the design to solve them.',
    es: 'Hallazgos clave de las pruebas con usuarios y cómo iteramos el diseño para resolverlos.',
  },
  'testing.problemLabel': { en: 'Problem', es: 'Problema' },
  'testing.solutionLabel': { en: 'Solution', es: 'Solución' },
  'testing.before': { en: 'Before', es: 'Antes' },
  'testing.after': { en: 'After', es: 'Después' },
  'testing.case1.problem': {
    en: 'The moment you accept the service request is not clear',
    es: 'No queda claro el momento en el que aceptás la solicitud de servicio',
  },
  'testing.case1.solution': {
    en: 'Add more information to the service request, with respective icons: problem title, price and visit date',
    es: 'Añadir más información en la solicitud de servicio, con íconos respectivos: título del problema, precio y fecha de la visita',
  },
  'testing.case1.quote': {
    en: 'I would like to confirm what I\'m accepting, it\'s a transaction',
    es: 'Me gustaría confirmar lo que estoy aceptando, es una transacción',
  },
  'testing.case2.problem': {
    en: 'The initial contact message should not be the same for all providers',
    es: 'El mensaje de contacto inicial no debe ser el mismo para todos los prestadores',
  },
  'testing.case2.solution': {
    en: 'Send an individual message to each provider after evaluating their profile',
    es: 'Enviar un mensaje individual a cada prestador luego de evaluar su perfil',
  },
  'testing.case2.quote': {
    en: 'I\'m letting someone into my house, I want to take the time to contact each provider personally. It\'s not something automatic',
    es: 'Estoy metiendo a alguien a mi casa, me quiero tomar el tiempo de contactar a cada prestador de forma personalizada. No es algo automático',
  },
  'testing.case3.problem': {
    en: 'The "view ongoing service" button is overlooked by users',
    es: 'El botón de "ver servicio en curso" es pasado por alto por los usuarios',
  },
  'testing.case3.solution': {
    en: 'Replace the passive link with a prominent visual alert with a clear action button guiding the user to the ongoing service',
    es: 'Reemplazar el enlace pasivo por una alerta visual destacada con un botón de acción claro que guíe al usuario hacia el servicio en curso',
  },
  'testing.case3.quote': {
    en: 'It looks like an alert, not a button',
    es: 'Parece un alerta, no un botón',
  },

  // Figma
  'figma.label': { en: 'Prototype', es: 'Prototipo' },
  'figma.title': { en: 'Explore the full design', es: 'Explorá el diseño completo' },
  'figma.description': {
    en: 'Navigate the interactive prototype in Figma to see all the flows and screens of the project.',
    es: 'Navegá el prototipo interactivo en Figma para ver todos los flujos y pantallas del proyecto.',
  },
  'figma.button': { en: 'View prototype in Figma', es: 'Ver prototipo en Figma' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
