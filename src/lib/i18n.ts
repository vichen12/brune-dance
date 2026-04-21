"use client";

import { createContext, useContext } from "react";

export type Lang = "es" | "en" | "fr" | "it";

/* =========================================================
   TRANSLATIONS
   ========================================================= */
export const translations = {
  es: {
    nav_home: "INICIO",
    nav_classes: "CLASES",
    nav_contact: "CONTACTO",

    hero_words: ["BAILARINA", "COREÓGRAFA", "PROFESORA", "ARTISTA"],
    hero_location: "Barcelona, España",
    hero_tagline: "Arte, técnica y pasión desde Argentina.",
    hero_bio:
      "Bailarina, coreógrafa y profesora de Argentina radicada en Barcelona. Certificada en PBT, PCT, Pilates y RAD — llevo más de 15 años transformando cuerpos y carreras a través del movimiento.",
    hero_cta: "DESCUBRÍ MIS CLASES",

    know_title: "CONÓCEME",
    know_location: "Barcelona · Argentina",
    know_tagline: "Una artista que enseña con el cuerpo y el alma.",
    know_bio:
      "Soy Brunela, profesora de ballet, coreógrafa y bailarina. Soy de Argentina y actualmente resido en Barcelona. Tras años de estudio y práctica dedicados, me he especializado en el entrenamiento de bailarines para ayudarlos a alcanzar su mejor rendimiento.",

    about_title: "SOBRE MÍ",
    about_eyebrow: "MI HISTORIA",
    about_tagline: "Una historia escrita en movimiento.",
    about_stat1_label: "Primeros pasos",
    about_stat1_sub: "Mendoza, Argentina",
    about_stat2_label: "Años de docencia",
    about_stat2_sub: "Desde 2011",
    about_stat3_label: "Años Fiesta Vendimia",
    about_stat3_sub: "Evento nacional",
    about_stat4_label: "Certificación",
    about_stat4_sub: "Royal Academy of Dance",
    about_ch1_title: "La bailarina nace",
    about_ch1_p1: "Nació en **1994** en Mendoza, Argentina. Comenzó el ballet a los **8 años**, sumando danza contemporánea, teatro, flamenco, hip-hop y acondicionamiento físico.",
    about_ch1_p2: "Subió a los principales escenarios interpretando **El Lago de los Cisnes, Don Quijote, El Cascanueces, Giselle y Coppélia**.",
    about_ch1_p3: "Se formó junto a figuras como **Eleonora Cassano, Paloma Herrera y Julio Bocca**.",
    about_ch2_era: "2011 – 2019",
    about_ch2_title: "La maestra emerge",
    about_ch2_p1: "En **2011** inició su carrera docente, graduándose como instructora de danza clásica.",
    about_ch2_p2: "En **2015** se incorporó a la **Fiesta de la Vendimia** — 1.000 artistas, miles de espectadores internacionales — durante **9 años consecutivos**.",
    about_ch2_p3: "En **2018** obtuvo el Título Técnico en Danza Clásica y Contemporánea.",
    about_ch3_era: "2020 – Hoy",
    about_ch3_title: "Barcelona & el mundo",
    about_ch3_p1: "En **2020** obtuvo certificaciones: **PBT, PCT, Pilates Reformer, Pilates Mat, Stretching** y menciones CPD de la **Royal Academy of Dance** de Londres.",
    about_ch3_p2: "En **2021** se convirtió en coreógrafa y remontadora: **El Lago de los Cisnes, Bayadera, Serenata de Balanchine**.",
    about_ch3_p3: "Hoy, desde **Barcelona**, forma bailarines en clases presenciales y online, con **30K+** seguidores en Instagram.",

    classes_title: "CLASES",
    class_label_pbt: "TÉCNICA",
    class_label_ballet: "CLÁSICO",
    class_label_pct: "CONTEMP.",
    class_label_stretching: "FLEX.",
    class_label_reformer: "FUERZA",
    class_label_mat: "CORE",
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

    online_eyebrow: "CONTENIDO EXCLUSIVO",
    online_soon_badge: "PRÓXIMAMENTE",
    online_title: "CLASES ONLINE",
    online_subtitle: "Clases de ballet en video, cuando y donde quieras.",
    online_text:
      "Estoy preparando una plataforma de videos con suscripción — clases completas, tutoriales y contenido exclusivo para bailarinas de todos los niveles.",
    online_email_placeholder: "Tu correo electrónico",
    online_notify_label: "Te aviso al lanzamiento",
    online_cta: "AVISAME",

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
    contact_online_class: "Clases Online",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelona & Online",
    footer_copy: "© 2026 Brunela Dance Trainer. Todos los derechos reservados.",
    footer_home: "INICIO",
    footer_classes: "CLASES",
    footer_contact: "CONTACTO",
    footer_online: "ONLINE",
    footer_designed_by: "Diseñado por",
  },

  en: {
    nav_home: "HOME",
    nav_classes: "CLASSES",
    nav_contact: "CONTACT",

    hero_words: ["DANCER", "CHOREOGRAPHER", "TEACHER", "ARTIST"],
    hero_location: "Barcelona, Spain",
    hero_tagline: "Art, technique and passion from Argentina.",
    hero_bio:
      "Dancer, choreographer and teacher from Argentina based in Barcelona. Certified in PBT, PCT, Pilates and RAD — over 15 years transforming bodies and careers through movement.",
    hero_cta: "DISCOVER MY CLASSES",

    know_title: "GET TO KNOW ME",
    know_location: "Barcelona · Argentina",
    know_tagline: "An artist who teaches with body and soul.",
    know_bio:
      "I am Brunela, a ballet teacher, choreographer and dancer from Argentina, currently living in Barcelona. After years of dedicated study and practice, I've specialized in training dancers to help them achieve their peak performance.",

    about_title: "ABOUT ME",
    about_eyebrow: "MY STORY",
    about_tagline: "A story written in movement.",
    about_stat1_label: "First steps",
    about_stat1_sub: "Mendoza, Argentina",
    about_stat2_label: "Years of teaching",
    about_stat2_sub: "Since 2011",
    about_stat3_label: "Vendimia Festival",
    about_stat3_sub: "National event",
    about_stat4_label: "Certification",
    about_stat4_sub: "Royal Academy of Dance",
    about_ch1_title: "The dancer is born",
    about_ch1_p1: "Born in **1994** in Mendoza, Argentina. Began ballet at **age 8**, adding contemporary dance, theater, flamenco, hip-hop and physical conditioning.",
    about_ch1_p2: "Performed on major stages in **Swan Lake, Don Quixote, The Nutcracker, Giselle and Coppélia**.",
    about_ch1_p3: "Trained alongside figures such as **Eleonora Cassano, Paloma Herrera and Julio Bocca**.",
    about_ch2_era: "2011 – 2019",
    about_ch2_title: "The teacher emerges",
    about_ch2_p1: "In **2011** began her teaching career, graduating as a classical dance instructor.",
    about_ch2_p2: "In **2015** joined the **Fiesta de la Vendimia** — 1,000 artists, thousands of international spectators — for **9 consecutive years**.",
    about_ch2_p3: "In **2018** obtained the Technical Degree in Classical and Contemporary Dance.",
    about_ch3_era: "2020 – Today",
    about_ch3_title: "Barcelona & the world",
    about_ch3_p1: "In **2020** earned certifications: **PBT, PCT, Pilates Reformer, Pilates Mat, Stretching** and CPD credits from the **Royal Academy of Dance** in London.",
    about_ch3_p2: "In **2021** became a choreographer and restager: **Swan Lake, Bayadera, Serenade by Balanchine**.",
    about_ch3_p3: "Today, from **Barcelona**, she trains dancers in in-person and online classes, with **30K+** Instagram followers.",

    classes_title: "CLASSES",
    class_label_pbt: "TECHNIQUE",
    class_label_ballet: "CLASSIC",
    class_label_pct: "CONTEMP.",
    class_label_stretching: "FLEX.",
    class_label_reformer: "STRENGTH",
    class_label_mat: "CORE",
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

    online_eyebrow: "EXCLUSIVE CONTENT",
    online_soon_badge: "COMING SOON",
    online_title: "ONLINE CLASSES",
    online_subtitle: "Ballet classes on video, whenever and wherever you want.",
    online_text:
      "I'm building a subscription video platform — full classes, tutorials and exclusive content for dancers of all levels.",
    online_email_placeholder: "Your email address",
    online_notify_label: "I'll notify you at launch",
    online_cta: "NOTIFY ME",

    contact_title: "CONTACT",
    contact_subtitle: "Ready to start dancing?",
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
    contact_online_class: "Online Classes",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelona & Online",
    footer_copy: "© 2026 Brunela Dance Trainer. All rights reserved.",
    footer_home: "HOME",
    footer_classes: "CLASSES",
    footer_contact: "CONTACT",
    footer_online: "ONLINE",
    footer_designed_by: "Designed by",
  },

  fr: {
    nav_home: "ACCUEIL",
    nav_classes: "COURS",
    nav_contact: "CONTACT",

    hero_words: ["DANSEUSE", "CHORÉGRAPHE", "PROFESSEURE", "ARTISTE"],
    hero_location: "Barcelone, Espagne",
    hero_tagline: "Art, technique et passion depuis l'Argentine.",
    hero_bio:
      "Danseuse, chorégraphe et professeure d'Argentine basée à Barcelone. Certifiée PBT, PCT, Pilates et RAD — plus de 15 ans à transformer des corps et des carrières par le mouvement.",
    hero_cta: "DÉCOUVRIR MES COURS",

    know_title: "APPRENEZ À ME CONNAÎTRE",
    know_location: "Barcelone · Argentine",
    know_tagline: "Une artiste qui enseigne avec le corps et l'âme.",
    know_bio:
      "Je suis Brunela, professeure de ballet, chorégraphe et danseuse originaire d'Argentine, résidant actuellement à Barcelone. Après des années d'études dédiées, je me suis spécialisée dans la formation des danseurs.",

    about_title: "À PROPOS",
    about_eyebrow: "MON HISTOIRE",
    about_tagline: "Une histoire écrite dans le mouvement.",
    about_stat1_label: "Premiers pas",
    about_stat1_sub: "Mendoza, Argentine",
    about_stat2_label: "Années d'enseignement",
    about_stat2_sub: "Depuis 2011",
    about_stat3_label: "Fête des Vendanges",
    about_stat3_sub: "Événement national",
    about_stat4_label: "Certification",
    about_stat4_sub: "Royal Academy of Dance",
    about_ch1_title: "La danseuse naît",
    about_ch1_p1: "Née en **1994** à Mendoza, Argentine. A commencé le ballet à **8 ans**, ajoutant danse contemporaine, théâtre, flamenco, hip-hop et conditionnement physique.",
    about_ch1_p2: "Montée sur les grandes scènes dans **Le Lac des Cygnes, Don Quichotte, Casse-Noisette, Giselle et Coppélia**.",
    about_ch1_p3: "S'est formée auprès de figures comme **Eleonora Cassano, Paloma Herrera et Julio Bocca**.",
    about_ch2_era: "2011 – 2019",
    about_ch2_title: "La maîtresse émerge",
    about_ch2_p1: "En **2011** a commencé sa carrière d'enseignante, obtenant son diplôme d'instructrice de danse classique.",
    about_ch2_p2: "En **2015** a rejoint la **Fiesta de la Vendimia** — 1 000 artistes, des milliers de spectateurs — pendant **9 années consécutives**.",
    about_ch2_p3: "En **2018** a obtenu le Diplôme Technique en Danse Classique et Contemporaine.",
    about_ch3_era: "2020 – Aujourd'hui",
    about_ch3_title: "Barcelone & le monde",
    about_ch3_p1: "En **2020** certifications : **PBT, PCT, Pilates Reformer, Pilates Mat, Stretching** et crédits CPD de la **Royal Academy of Dance** de Londres.",
    about_ch3_p2: "En **2021** est devenue chorégraphe et remonteuse : **Lac des Cygnes, Bayadère, Sérénade de Balanchine**.",
    about_ch3_p3: "Aujourd'hui, depuis **Barcelone**, elle forme des danseurs en présentiel et en ligne, avec **30K+** abonnés sur Instagram.",

    classes_title: "COURS",
    class_label_pbt: "TECHNIQUE",
    class_label_ballet: "CLASSIQUE",
    class_label_pct: "CONTEMP.",
    class_label_stretching: "FLEX.",
    class_label_reformer: "FORCE",
    class_label_mat: "CORE",
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

    online_eyebrow: "CONTENU EXCLUSIF",
    online_soon_badge: "BIENTÔT DISPONIBLE",
    online_title: "COURS EN LIGNE",
    online_subtitle: "Cours de ballet en vidéo, quand et où vous voulez.",
    online_text:
      "Je prépare une plateforme vidéo par abonnement — cours complets, tutoriels et contenu exclusif pour les danseurs de tous niveaux.",
    online_email_placeholder: "Votre adresse e-mail",
    online_notify_label: "Je vous préviendrai au lancement",
    online_cta: "PRÉVENEZ-MOI",

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
    contact_online_class: "Cours en ligne",

    footer_tagline: "Ballet · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcelone & En ligne",
    footer_copy: "© 2026 Brunela Dance Trainer. Tous droits réservés.",
    footer_home: "ACCUEIL",
    footer_classes: "COURS",
    footer_contact: "CONTACT",
    footer_online: "EN LIGNE",
    footer_designed_by: "Conçu par",
  },

  it: {
    nav_home: "HOME",
    nav_classes: "CLASSI",
    nav_contact: "CONTATTO",

    hero_words: ["BALLERINA", "COREOGRAFA", "INSEGNANTE", "ARTISTA"],
    hero_location: "Barcellona, Spagna",
    hero_tagline: "Arte, tecnica e passione dall'Argentina.",
    hero_bio:
      "Ballerina, coreografa e insegnante argentina con sede a Barcellona. Certificata PBT, PCT, Pilates e RAD — oltre 15 anni a trasformare corpi e carriere attraverso il movimento.",
    hero_cta: "SCOPRI LE MIE CLASSI",

    know_title: "CONOSCIMI",
    know_location: "Barcellona · Argentina",
    know_tagline: "Un'artista che insegna con il corpo e l'anima.",
    know_bio:
      "Sono Brunela, insegnante di balletto, coreografa e ballerina argentina, attualmente residente a Barcellona. Dopo anni di studio e pratica dedicati, mi sono specializzata nella formazione di ballerini per aiutarli a raggiungere le loro massime prestazioni.",

    about_title: "SU DI ME",
    about_eyebrow: "LA MIA STORIA",
    about_tagline: "Una storia scritta nel movimento.",
    about_stat1_label: "Primi passi",
    about_stat1_sub: "Mendoza, Argentina",
    about_stat2_label: "Anni di insegnamento",
    about_stat2_sub: "Dal 2011",
    about_stat3_label: "Fiesta Vendimia",
    about_stat3_sub: "Evento nazionale",
    about_stat4_label: "Certificazione",
    about_stat4_sub: "Royal Academy of Dance",
    about_ch1_title: "La ballerina nasce",
    about_ch1_p1: "Nata nel **1994** a Mendoza, Argentina. Ha iniziato il balletto a **8 anni**, aggiungendo danza contemporanea, teatro, flamenco, hip-hop e condizionamento fisico.",
    about_ch1_p2: "Ha calcato i maggiori palcoscenici ne **Il Lago dei Cigni, Don Chisciotte, Lo Schiaccianoci, Giselle e Coppélia**.",
    about_ch1_p3: "Si è formata con figure come **Eleonora Cassano, Paloma Herrera e Julio Bocca**.",
    about_ch2_era: "2011 – 2019",
    about_ch2_title: "L'insegnante emerge",
    about_ch2_p1: "Nel **2011** ha iniziato la carriera docente, laureandosi come istruttrice di danza classica.",
    about_ch2_p2: "Nel **2015** si è unita alla **Fiesta de la Vendimia** — 1.000 artisti, migliaia di spettatori internazionali — per **9 anni consecutivi**.",
    about_ch2_p3: "Nel **2018** ha conseguito il Diploma Tecnico in Danza Classica e Contemporanea.",
    about_ch3_era: "2020 – Oggi",
    about_ch3_title: "Barcellona & il mondo",
    about_ch3_p1: "Nel **2020** certificazioni: **PBT, PCT, Pilates Reformer, Pilates Mat, Stretching** e crediti CPD della **Royal Academy of Dance** di Londra.",
    about_ch3_p2: "Nel **2021** è diventata coreografa e rimontista: **Il Lago dei Cigni, Bayadère, Serenata di Balanchine**.",
    about_ch3_p3: "Oggi, da **Barcellona**, forma ballerini in lezioni in presenza e online, con **30K+** follower su Instagram.",

    classes_title: "CLASSI",
    class_label_pbt: "TECNICA",
    class_label_ballet: "CLASSICO",
    class_label_pct: "CONTEMP.",
    class_label_stretching: "FLEX.",
    class_label_reformer: "FORZA",
    class_label_mat: "CORE",
    card_pbt_title: "Progressing Ballet Technique (PBT)",
    card_pbt_desc:
      "Programma innovativo di condizionamento che allena la memoria muscolare per migliorare la tecnica in tutte le forme di danza.",
    card_pbt_full:
      "Programma innovativo di condizionamento corporeo progettato per migliorare la tecnica allenando la memoria muscolare richiesta in ogni esercizio. Sistema unico con esercizi di tecnica del balletto per l'acquisizione graduata di abilità. Insegnato da oltre 4.000 insegnanti certificati in oltre 3.500 scuole nel mondo.",
    card_pct_title: "Progressing Contemporary Technique (PCT)",
    card_pct_desc:
      "Sviluppa la libertà di movimento attraverso esercizi funzionali, con focus sull'articolazione della colonna e la musicalità.",
    card_pct_full:
      "Creato da Adam Blanch insieme a PBT come serie di esercizi funzionali per esplorare la libertà di movimento. PCT attiva gruppi muscolari attraverso resistenza e forza, concentrandosi sull'articolazione della contrazione, il trasferimento del peso e la connessione con il suolo.",
    card_stretching_title: "Stretching",
    card_stretching_desc:
      "Attività fisica focalizzata sul miglioramento della flessibilità, dell'ampiezza di movimento e della salute muscolare.",
    card_stretching_full:
      "Attività fisica che estende muscoli e tendini per migliorare flessibilità e salute muscolare. Include stretching statico, dinamico e PNF. Ideale per il riscaldamento e la prevenzione degli infortuni.",
    card_reformer_title: "Pilates Reformer",
    card_reformer_desc:
      "Tecnica su macchina specializzata con molle regolabili che lavora tutto il corpo, migliorando forza, postura e coordinazione.",
    card_reformer_full:
      "Tecnica eseguita su una macchina 'reformer' con molle regolabili per resistenza variabile. Permette esercizi in posizioni variate. Ideale per la riabilitazione e l'allenamento ad alte prestazioni.",
    card_mat_title: "Pilates Mat",
    card_mat_desc:
      "Tecnica a terra che sviluppa la forza del core, la flessibilità e la resistenza muscolare usando il peso corporeo.",
    card_mat_full:
      "Esercizio a terra che sviluppa la forza del core, la flessibilità e la resistenza muscolare. Attiva addominali e zona lombare. Nessuna attrezzatura necessaria. Migliora la postura e riduce il dolore lombare.",
    card_ballet_title: "Balletto",
    card_ballet_desc:
      "Lezioni di balletto classico per tutti i livelli, con focus su tecnica, postura ed espressione artistica.",
    card_ballet_full:
      "Balletto classico per tutti i livelli: sbarra, centro, allegro, adagio e variazioni di repertorio. Attenzione personalizzata per lo sviluppo tecnico e artistico di ogni allievo. Il balletto sviluppa disciplina, coordinazione, flessibilità ed eleganza.",
    classes_eyebrow: "METODOLOGIA",
    classes_subtitle:
      "Ogni disciplina è progettata per elevare la tua tecnica, rafforzare il tuo corpo e connetterti con il movimento.",
    detail_cta: "PRENOTA UNA LEZIONE",
    detail_more: "SCOPRI DI PIÙ",
    detail_less: "VEDI MENO",
    detail_close: "CHIUDI",

    online_eyebrow: "CONTENUTO ESCLUSIVO",
    online_soon_badge: "PROSSIMAMENTE",
    online_title: "CLASSI ONLINE",
    online_subtitle: "Lezioni di balletto in video, quando e dove vuoi.",
    online_text:
      "Sto preparando una piattaforma video in abbonamento — lezioni complete, tutorial e contenuto esclusivo per ballerini di tutti i livelli.",
    online_email_placeholder: "La tua email",
    online_notify_label: "Ti avviso al lancio",
    online_cta: "AVVISAMI",

    contact_title: "CONTATTO",
    contact_subtitle: "Pronta a iniziare a ballare?",
    contact_tagline: "Parliamo e troviamo la lezione perfetta per te.",
    contact_name: "Nome completo",
    contact_email: "Indirizzo email",
    contact_phone: "Telefono",
    contact_class: "Lezione di interesse",
    contact_message: "Messaggio",
    contact_submit: "INVIA MESSAGGIO",
    contact_success: "Messaggio inviato! Ti contatterò molto presto.",
    contact_error: "Errore nell'invio. Scrivimi su WhatsApp.",
    contact_whatsapp: "ANCHE SU WHATSAPP",
    contact_select: "Seleziona una lezione",
    contact_online_class: "Classi Online",

    footer_tagline: "Balletto · PBT · PCT · Pilates · Stretching",
    footer_city: "Barcellona & Online",
    footer_copy: "© 2026 Brunela Dance Trainer. Tutti i diritti riservati.",
    footer_home: "HOME",
    footer_classes: "CLASSI",
    footer_contact: "CONTATTO",
    footer_online: "ONLINE",
    footer_designed_by: "Realizzato da",
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
