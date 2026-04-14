"use client";

import { createContext, useContext } from "react";

export type Lang = "es" | "en" | "fr";

/* =========================================================
   TRANSLATIONS
   ========================================================= */
export const translations = {
  es: {
    nav_home: "INICIO",
    nav_classes: "CLASES",
    nav_contact: "CONTACTO",

    hero_words: ["BAILARINA", "COREÓGRAFA", "PROFESORA", "ARTISTA"],
    hero_bio:
      "Bailarina, coreógrafa y profesora de Argentina radicada en Barcelona. Certificada en PBT, PCT, Pilates y RAD — llevo más de 15 años transformando cuerpos y carreras a través del movimiento.",
    hero_cta: "DESCUBRÍ MIS CLASES",

    know_title: "CONÓCEME",
    know_bio:
      "Soy Brunela, profesora de ballet, coreógrafa y bailarina. Soy de Argentina y actualmente resido en Barcelona. Tras años de estudio y práctica dedicados, me he especializado en el entrenamiento de bailarines para ayudarlos a alcanzar su mejor rendimiento.",

    about_title: "SOBRE MÍ",
    about_p1:
      "Me llamo Brunela, y mi camino en el ballet comenzó a los 8 años. A los 31, sigo dedicada al arte de la danza. Mi pasión por el ballet y las artes ha sido una constante en mi vida. Comencé en Mendoza, Argentina, incorporando danza contemporánea, teatro, flamenco, hip-hop y acondicionamiento físico.",
    about_p2:
      "Participé en producciones de Don Quijote, La Bella Durmiente, Serenata, El Lago de los Cisnes, El Cascanueces, Coppélia y Giselle. Me formé con Eleonora Cassano, Paloma Herrera, Julio Bocca, Silvia Bazilis, Julio Toto y Katy Gallo.",
    about_p3:
      "En 2011 comencé como profesora de ballet, graduándome como instructora de danza clásica. Obtuve el Título Técnico en Danza Clásica y Contemporánea en 2018.",
    about_p4:
      'En 2015 me incorporé a la "Fiesta de la Vendimia", evento que reúne a 1.000 artistas y atrae miles de espectadores internacionales. Participé durante nueve años consecutivos.',
    about_p5:
      "Amplié progresivamente mis clases para distintos grupos de edad y niveles, desde iniciación hasta avanzado, incluyendo variaciones de repertorio y trabajo en puntas.",
    about_p6:
      "En 2020 obtuve certificaciones de Pilates Mat, Pilates Reformer, Stretching y Técnica Progresiva de Ballet y Contemporáneo, más menciones CPD de la Royal Academy of Dance (RAD).",
    about_p7:
      'En 2021 ingresé como coreógrafa y remontadora: El Lago de los Cisnes, Bayadera, Serenata de Balanchine y nuevas piezas para "Great Galloping".',
    about_p8:
      "Hasta hoy, sigo dedicada a la superación personal y educación continua para brindar siempre lo mejor a mis estudiantes.",

    classes_title: "CLASES",
    card_pbt_title: "Progressing Ballet Technique (PBT)",
    card_pbt_desc:
      "Programa innovador de acondicionamiento que entrena la memoria muscular para mejorar la técnica en todas las formas de danza.",
    card_pbt_full:
      "Es un innovador programa de acondicionamiento y fortalecimiento corporal diseñado para mejorar la técnica entrenando la memoria muscular requerida en cada ejercicio. Sistema único con ejercicios de técnica de ballet para adquisición de habilidades de manera graduada, desde nivel inicial hasta avanzado. Impartido por más de 4.000 profesores certificados en más de 3.500 escuelas en todo el mundo.",

    card_pct_title: "Progressing Contemporary Technique (PCT)",
    card_pct_desc:
      "Desarrolla la libertad de movimiento a través de ejercicios funcionales, con foco en articulación de columna y musicalidad.",
    card_pct_full:
      "Programa creado por Adam Blanch junto con PBT, diseñado como serie de ejercicios funcionales para explorar y desarrollar la libertad de movimiento. PCT activa grupos musculares a través de resistencia y fuerza, enfocándose en articulación de contracción, transferencia de peso, conexión con el suelo y expansión.",

    card_stretching_title: "Stretching",
    card_stretching_desc:
      "Actividad física enfocada en mejorar la flexibilidad, el rango de movimiento y la salud muscular general.",
    card_stretching_full:
      "Actividad física que extiende músculos y tendones para mejorar flexibilidad, rango de movimiento y salud muscular. Incluye estiramientos estáticos, dinámicos y FNP. Ideal para calentar, mejorar función muscular y prevenir lesiones.",

    card_reformer_title: "Pilates Reformer",
    card_reformer_desc:
      "Técnica en máquina especializada con resortes ajustables que trabaja todo el cuerpo, mejorando fuerza, postura y coordinación.",
    card_reformer_full:
      "Técnica realizada en una máquina 'reformer' con resortes ajustables para resistencia variable. Permite ejercicios en posiciones variadas —acostado, sentado, arrodillado, de pie— ofreciendo versatilidad única. Ideal para rehabilitación y alto rendimiento.",

    card_mat_title: "Pilates Mat",
    card_mat_desc:
      "Técnica de suelo que desarrolla fuerza del core, flexibilidad y resistencia muscular usando el peso corporal.",
    card_mat_full:
      "Ejercicio en colchoneta que desarrolla fuerza del core, flexibilidad y resistencia muscular. Activa abdominales y zona lumbar. Accesible sin equipamiento especial. Mejora postura, reduce dolor lumbar y aumenta conciencia corporal.",

    card_ballet_title: "Ballet",
    card_ballet_desc:
      "Clases de ballet clásico para todos los niveles, con foco en técnica, postura y expresión artística.",
    card_ballet_full:
      "Ballet clásico para todos los niveles: barra, centro, allegro, adagio y variaciones de repertorio. Atención personalizada para el desarrollo técnico y artístico de cada alumno. El ballet desarrolla disciplina, coordinación, flexibilidad y elegancia.",

    classes_eyebrow: "METODOLOGÍA",
    classes_subtitle:
      "Cada disciplina está diseñada para elevar tu técnica, fortalecer tu cuerpo y conectarte con el movimiento.",
    detail_cta: "RESERVAR CLASE",
    detail_more: "SABER MÁS",
    detail_less: "VER MENOS",
    detail_close: "CERRAR",

    online_title: "CLASES ONLINE",
    online_subtitle: "¿No encontrás horarios que se adapten a vos?",
    online_text:
      "Coordinamos días y horarios. Sin experiencia previa necesaria, aprendé desde cero. Clase de prueba y nivelación gratuita.",
    online_cta: "ESCRIBIME",

    contact_title: "CONTACTO",
    contact_subtitle: "¿Lista para empezar a bailar?",
    contact_tagline: "Hablemos y encontremos la clase perfecta para vos.",
    contact_name: "Nombre completo",
    contact_email: "Correo electrónico",
    contact_phone: "Teléfono",
    contact_class: "Clase de interés",
    contact_message: "Mensaje",
    contact_submit: "ENVIAR MENSAJE",
    contact_success: "¡Mensaje enviado! Me pondré en contacto muy pronto.",
    contact_error: "Error al enviar. Escribime por WhatsApp.",
    contact_whatsapp: "TAMBIÉN POR WHATSAPP",
    contact_select: "Seleccioná una clase",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelona & Online",
    footer_copy: "© 2026 Brunela Dance Trainer. Todos los derechos reservados.",
    footer_home: "INICIO",
    footer_classes: "CLASES",
    footer_contact: "CONTACTO",
    footer_online: "ONLINE",
  },

  en: {
    nav_home: "HOME",
    nav_classes: "CLASSES",
    nav_contact: "CONTACT",

    hero_words: ["DANCER", "CHOREOGRAPHER", "TEACHER", "ARTIST"],
    hero_bio:
      "Dancer, choreographer and teacher from Argentina based in Barcelona. Certified in PBT, PCT, Pilates and RAD — over 15 years transforming bodies and careers through movement.",
    hero_cta: "DISCOVER MY CLASSES",

    know_title: "GET TO KNOW ME",
    know_bio:
      "I am Brunela, a ballet teacher, choreographer and dancer from Argentina, currently living in Barcelona. After years of dedicated study and practice, I've specialized in training dancers to help them achieve their peak performance.",

    about_title: "ABOUT ME",
    about_p1:
      "My name is Brunela, and my ballet journey began at age 8. At 31, I'm still dedicated to the art of dance. I started in Mendoza, Argentina, gradually adding contemporary, theater, flamenco, hip-hop, and physical conditioning.",
    about_p2:
      "I've performed in Don Quixote, The Sleeping Beauty, Serenade, Swan Lake, The Nutcracker, Coppélia and Giselle. I trained with Eleonora Cassano, Paloma Herrera, Julio Bocca, Silvia Bazilis, Julio Toto and Katy Gallo.",
    about_p3:
      "In 2011 I started teaching ballet and graduated as a classical dance instructor. I completed my Technical Degree in Classical and Contemporary Dance in 2018.",
    about_p4:
      "In 2015 I joined the nationally renowned 'Fiesta de la Vendimia,' an event gathering 1,000 artists and thousands of international spectators. I participated for nine consecutive years.",
    about_p5:
      "Over the years I progressively broadened my classes to diverse age groups and levels — from beginners to advanced — including repertoire variations and pointe work.",
    about_p6:
      "In 2020 I obtained certifications in Mat Pilates, Reformer Pilates, Stretching, and Progressive Ballet and Contemporary Technique, plus CPD credits from the Royal Academy of Dance (RAD).",
    about_p7:
      "In 2021 I became a choreographer and restager: Swan Lake suite, Bayadera, Balanchine's Serenade, and new pieces for 'Great Galloping.'",
    about_p8:
      "To this day I remain dedicated to self-improvement and continuous education, always offering the best to my students.",

    classes_title: "CLASSES",
    card_pbt_title: "Progressing Ballet Technique (PBT)",
    card_pbt_desc:
      "An innovative conditioning program training muscle memory to enhance technique across all dance forms.",
    card_pbt_full:
      "An innovative body conditioning program designed to improve technique by training the muscle memory required in every exercise. A unique system using specific ballet technique exercises for graded skill acquisition — junior to advanced. Taught by 4,000+ certified teachers in 3,500+ schools worldwide.",

    card_pct_title: "Progressing Contemporary Technique (PCT)",
    card_pct_desc:
      "Develops freedom of movement through functional exercises, focusing on spinal articulation and musicality.",
    card_pct_full:
      "Created by Adam Blanch alongside PBT as a series of functional exercises to explore freedom of movement. PCT activates muscle groups through resistance and strength, focusing on contraction articulation, weight transfer, ground connection and expansion.",

    card_stretching_title: "Stretching",
    card_stretching_desc:
      "Physical activity focused on improving flexibility, range of motion and overall muscle health.",
    card_stretching_full:
      "Physical activity extending muscles and tendons to improve flexibility, range of motion and muscle health. Includes static, dynamic and PNF stretching. Ideal for warming up, improving muscle function and preventing injuries.",

    card_reformer_title: "Pilates Reformer",
    card_reformer_desc:
      "Exercise technique on a specialized machine with adjustable springs working the entire body.",
    card_reformer_full:
      "Technique performed on a 'reformer' machine with adjustable springs for variable resistance. Allows exercises in varied positions — lying, sitting, kneeling, standing. Ideal for rehabilitation and high-performance training.",

    card_mat_title: "Pilates Mat",
    card_mat_desc:
      "Floor technique developing core strength, flexibility and muscular endurance using body weight.",
    card_mat_full:
      "Mat exercise technique developing core strength, flexibility and muscular endurance. Activates abs and lower back. No equipment needed. Improves posture, reduces lower back pain and increases body awareness.",

    card_ballet_title: "Ballet",
    card_ballet_desc:
      "Classical ballet classes for all levels, focusing on technique, posture and artistic expression.",
    card_ballet_full:
      "Classical ballet for all levels: barre, center, allegro, adagio and repertoire variations. Personalized attention for the technical and artistic development of each student. Ballet builds discipline, coordination, flexibility and elegance.",

    classes_eyebrow: "METHODOLOGY",
    classes_subtitle:
      "Each discipline is designed to elevate your technique, strengthen your body, and connect you with movement.",
    detail_cta: "BOOK A CLASS",
    detail_more: "LEARN MORE",
    detail_less: "SEE LESS",
    detail_close: "CLOSE",

    online_title: "ONLINE CLASSES",
    online_subtitle: "Can't Find Classes That Fit Your Schedule?",
    online_text:
      "Days and schedules to coordinate. No experience necessary, learn from scratch. Free Trial and Leveling Class.",
    online_cta: "MESSAGE ME",

    contact_title: "CONTACT",
    contact_subtitle: "Ready to Start Dancing?",
    contact_tagline: "Let's talk and find the perfect class for you.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_phone: "Phone",
    contact_class: "Class of Interest",
    contact_message: "Message",
    contact_submit: "SEND MESSAGE",
    contact_success: "Message sent! I'll be in touch very soon.",
    contact_error: "Error sending. Please message me on WhatsApp.",
    contact_whatsapp: "ALSO ON WHATSAPP",
    contact_select: "Select a class",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelona & Online",
    footer_copy: "© 2026 Brunela Dance Trainer. All rights reserved.",
    footer_home: "HOME",
    footer_classes: "CLASSES",
    footer_contact: "CONTACT",
    footer_online: "ONLINE",
  },

  fr: {
    nav_home: "ACCUEIL",
    nav_classes: "COURS",
    nav_contact: "CONTACT",

    hero_words: ["DANSEUSE", "CHORÉGRAPHE", "PROFESSEURE", "ARTISTE"],
    hero_bio:
      "Danseuse, chorégraphe et professeure d'Argentine basée à Barcelone. Certifiée PBT, PCT, Pilates et RAD — plus de 15 ans à transformer des corps et des carrières par le mouvement.",
    hero_cta: "DÉCOUVRIR MES COURS",

    know_title: "APPRENEZ À ME CONNAÎTRE",
    know_bio:
      "Je suis Brunela, professeure de ballet, chorégraphe et danseuse originaire d'Argentine, résidant actuellement à Barcelone. Après des années d'études dédiées, je me suis spécialisée dans la formation des danseurs.",

    about_title: "À PROPOS",
    about_p1:
      "Je m'appelle Brunela, mon parcours dans le ballet a commencé à 8 ans. À 31 ans, je reste dédiée à l'art de la danse. J'ai commencé à Mendoza, Argentine, en intégrant progressivement la danse contemporaine, le théâtre, le flamenco et le hip-hop.",
    about_p2:
      "J'ai participé à Don Quichotte, La Belle au Bois Dormant, Sérénade, Le Lac des Cygnes, Casse-Noisette, Coppélia et Giselle. Je me suis formée avec Eleonora Cassano, Paloma Herrera, Julio Bocca et d'autres figures éminentes.",
    about_p3:
      "En 2011 j'ai commencé à enseigner le ballet et obtenu mon diplôme d'instructrice. En 2018 j'ai complété mon Diplôme Technique en Danse Classique et Contemporaine.",
    about_p4:
      "En 2015 j'ai rejoint la 'Fiesta de la Vendimia', un événement de 1 000 artistes attirant des milliers de spectateurs. J'y ai participé neuf années consécutives.",
    about_p5:
      "Au fil des années j'ai élargi mes cours à divers groupes d'âge et niveaux, du débutant à l'avancé, incluant des variations de répertoire et le travail sur pointes.",
    about_p6:
      "En 2020 j'ai obtenu des certifications en Pilates Mat, Pilates Reformer, Stretching et Technique Progressive de Ballet, ainsi que des crédits CPD de la Royal Academy of Dance (RAD).",
    about_p7:
      "En 2021 je suis devenue chorégraphe et remonteuse: Lac des Cygnes, Bayadère, Sérénade de Balanchine et nouvelles pièces pour 'Great Galloping'.",
    about_p8:
      "Aujourd'hui je reste dédiée à l'amélioration continue afin d'offrir toujours le meilleur à mes élèves.",

    classes_title: "COURS",
    card_pbt_title: "Progressing Ballet Technique (PBT)",
    card_pbt_desc:
      "Programme innovant de conditionnement entraînant la mémoire musculaire pour améliorer la technique dans toutes les formes de danse.",
    card_pbt_full:
      "Programme innovant de conditionnement conçu pour améliorer la technique en entraînant la mémoire musculaire. Système unique d'exercices de ballet pour l'acquisition graduée de compétences. Enseigné par plus de 4 000 professeurs certifiés dans plus de 3 500 écoles dans le monde.",

    card_pct_title: "Progressing Contemporary Technique (PCT)",
    card_pct_desc:
      "Développe la liberté de mouvement à travers des exercices fonctionnels, axés sur l'articulation de la colonne.",
    card_pct_full:
      "Créé par Adam Blanch avec PBT, comme série d'exercices fonctionnels pour explorer la liberté de mouvement. PCT active les groupes musculaires par la résistance, en se concentrant sur l'articulation, le transfert de poids et la connexion au sol.",

    card_stretching_title: "Stretching",
    card_stretching_desc:
      "Activité physique axée sur l'amélioration de la flexibilité, de l'amplitude et de la santé musculaire.",
    card_stretching_full:
      "Activité physique qui étend les muscles et tendons pour améliorer la flexibilité et la santé musculaire. Comprend les étirements statiques, dynamiques et FNP. Idéal pour l'échauffement et la prévention des blessures.",

    card_reformer_title: "Pilates Reformer",
    card_reformer_desc:
      "Technique sur machine spécialisée à ressorts réglables travaillant tout le corps.",
    card_reformer_full:
      "Technique sur une machine 'reformer' à ressorts réglables pour une résistance variable. Permet des exercices dans des positions variées. Idéal pour la rééducation et l'entraînement de haut niveau.",

    card_mat_title: "Pilates Mat",
    card_mat_desc:
      "Technique au sol développant la force du core, la flexibilité et l'endurance musculaire.",
    card_mat_full:
      "Technique au sol sur tapis développant la force du core et la flexibilité. Active les abdominaux et le bas du dos. Aucun équipement nécessaire. Améliore la posture et réduit les douleurs lombaires.",

    card_ballet_title: "Ballet",
    card_ballet_desc:
      "Cours de ballet classique pour tous les niveaux, axés sur la technique, la posture et l'expression artistique.",
    card_ballet_full:
      "Ballet classique pour tous les niveaux: barre, centre, allegro, adagio et variations. Attention personnalisée pour le développement technique et artistique de chaque élève. Le ballet développe discipline, coordination, flexibilité et élégance.",

    classes_eyebrow: "MÉTHODOLOGIE",
    classes_subtitle:
      "Chaque discipline est conçue pour élever votre technique, renforcer votre corps et vous connecter au mouvement.",
    detail_cta: "RÉSERVER UN COURS",
    detail_more: "EN SAVOIR PLUS",
    detail_less: "VOIR MOINS",
    detail_close: "FERMER",

    online_title: "COURS EN LIGNE",
    online_subtitle: "Vous ne trouvez pas d'horaires qui vous conviennent ?",
    online_text:
      "Jours et horaires à coordonner. Aucune expérience nécessaire. Cours d'essai gratuit.",
    online_cta: "ÉCRIVEZ-MOI",

    contact_title: "CONTACT",
    contact_subtitle: "Prête à commencer à danser ?",
    contact_tagline: "Parlons et trouvons le cours parfait pour vous.",
    contact_name: "Nom complet",
    contact_email: "Adresse e-mail",
    contact_phone: "Téléphone",
    contact_class: "Cours d'intérêt",
    contact_message: "Message",
    contact_submit: "ENVOYER",
    contact_success: "Message envoyé ! Je vous contacterai très bientôt.",
    contact_error: "Erreur. Veuillez m'écrire sur WhatsApp.",
    contact_whatsapp: "AUSSI SUR WHATSAPP",
    contact_select: "Sélectionnez un cours",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelone & En ligne",
    footer_copy: "© 2026 Brunela Dance Trainer. Tous droits réservés.",
    footer_home: "ACCUEIL",
    footer_classes: "COURS",
    footer_contact: "CONTACT",
    footer_online: "EN LIGNE",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

/* =========================================================
   CONTEXT
   ========================================================= */
export interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string | string[];
}

export const I18nContext = createContext<I18nContextValue>({
  lang: "es",
  setLang: () => {},
  t: (key) => translations.es[key] as string,
});

export const useI18n = () => useContext(I18nContext);
