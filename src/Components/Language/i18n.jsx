import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'BENJAMIN MARTIN PAREDES BRAIN',
          subtitle: 'FULLSTACK DEVELOPER',
          intro: "Hi, I'm Benjamin Martin Paredes Brain, a programming enthusiast who embarked on this exciting journey in the year 2022. Since then, I have a deep admiration for this coding and programming art, also I consider myself as a person committed to constant learning.",
          focus: 'My current focus revolves around craft high-quality web applications and continuously improving my professional skills. My goal is to push my own every day, offering increasingly innovative and efficient results to technological challenges we confront.',
          passion: "In the other hand, I enjoy nurturing my mind through books, exploring new worlds by reading and acquiring knowledge. In addition, I'm passionate about well-being and health. You'll regularly find me at the gym, working on my mind and body.",

          buttonES: "English",
          buttonEN: "Spanish",

          navPROJECTS: "Projects",
          navSKILLS: "Skills",
          navCONTACT: "Contact",

          titleSectionProjects:"Projects",
          titleSectionSkills:"Skills",
          titleSectionContact:"Contact",

          contactLabelName:"Name",
          contactLabelEmail:"Email",
          contactLabelMessage:"Message",
          contactButton:"Send",
          contactPlaceholderName:"Example: Benjamin Brain",
          contactPlaceholderEmail:"Example: name@email.com",

          projectCardDescVurdertrend:"Vurdertrend is an e-commerce DEMO website developed entirely with React and utilizing Firebase as the database backend. It features responsive design and various functionalities.",
        },
      },
      es: {
        translation: {
          title: 'BENJAMIN MARTIN PAREDES BRAIN',
          subtitle: 'DESARROLLADOR FULLSTACK',
          intro: "Hola, soy Benjamin Martin Paredes Brain, un apasionado de la programación que comenzó este emocionante viaje en 2022. Desde entonces, tengo una profunda admiración por este arte, lo que me impulsa a un compromiso con el aprendizaje constante.",
          focus: 'Mi enfoque actual es crear aplicaciones web de alta calidad y mejorar continuamente mis habilidades profesionales. Mi objetivo diario es ofrecer resultados cada vez más innovadores y eficientes a los desafíos tecnológicos que enfrentamos.',
          passion: "Además, disfruto leyendo libros, explorando nuevos mundos a través de la lectura y adquiriendo conocimientos. También tengo pasión por el bienestar y la salud, me encontrarás regularmente en el gimnasio, trabajando en mi mente y cuerpo.",


          buttonES: "Inglés",
          buttonEN: "Español",

          navPROJECTS: "Proyectos",
          navSKILLS: "Habilidades",
          navCONTACT: "Contacto",

          titleSectionProjects:"Proyectos",
          titleSectionSkills:"Habilidades",
          titleSectionContact:"Contacto",

          contactLabelName:"Nombre",
          contactLabelEmail:"Correo electrónico",
          contactLabelMessage:"Mensaje",
          contactButton:"Enviar",
          contactPlaceholderName:"Ejemplo: Benjamin Brain",
          contactPlaceholderEmail:"Ejemplo: nombre@email.com",

          projectCardDescVurdertrend:"Vurdertrend es una página web DEMO de e-commerce desarrollada completamente con React y utilizando Firebase como backend para la base de datos. Cuenta con un diseño completamente responsive y diversas funcionalidades."
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;