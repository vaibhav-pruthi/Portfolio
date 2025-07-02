// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import vansh from './assets/education_logo/images.jpg';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
    
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
    
      { name: 'C++', logo: cppLogo },

      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: vansh,
      school: "Bennett university, Greater Noida",
      // 
      grade: "8.9 CGPA",
      // desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Btech in Computer Applications",
    },
    
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI-Powered Q&A Application",
      description:
        "This project is a React-based web application that leverages an external API to provide answers to user-submitted questions. It features a clean, user-friendly interface with dark mode support, recent search history, and syntax highlighting for code snippets. The application is built using modern web technologies and follows best practices for code organization and maintainability.",
      tags: ["tailwindcss", "JavaScript", "React JS", "API"],
      github: "https://github.com/vaibhav-pruthi/react-ai-tool",
      webapp: "https://react-ai-tool-blond.vercel.app/",
    },
    {
      id: 1,
      title: "Paste App",
      description:
        "A modern clipboard manager built using React and Electron. PasteApp helps users store, manage, and retrieve clipboard history efficiently, enhancing productivity and minimizing repetitive copy-paste tasks.",
      
      tags: ["React JS", "tailwindcss", "JavaScript","Html", "CSS"],
      github: "https://github.com/vaibhav-pruthi/PasteApp",
      webapp: "https://paste-app-eosin-gamma.vercel.app/pastes",
    },
    {
      id: 2,
      title: "kisanAI_project",
      description:
        "GreenAI is an AI-powered gardening assistant designed to empower individuals and small-scale growers in maintaining healthier and more productive plants. Whether you're managing a personal kitchen garden, running a nursery, overseeing a greenhouse or working on a small farm, GreenAI provides smart, accessible solutions tailored to your needs — no sign-up required.",
      
      tags: ["python", "flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/vaibhav-pruthi/kisanAI_project",
     
    },
    {
      id: 3,
      title: "Flask To-Do App with SQLite",
      description:
        "This is a simple Flask-based To-Do web application that lets users add, update, and delete tasks from a task list. It demonstrates basic use of Flask, HTML, Bootstrap, and SQLite.",
   
      tags: ["Html", "bootstrap", "python", "Flask"],
      github: "https://github.com/vaibhav-pruthi/Flask",
      webapp: "",
    },
    {
      id: 4,
      title: "Drowsiness Detection System",
      description:
        "This system tracks the driver’s facial features—particularly eyes and mouth—using a camera feed. It calculates metrics like Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MOR)/yawing, raising an alarm if signs of tiredness persist across frames. Based on proven methods, it helps reduce drowsiness-related accidents.",
     
      tags: ["python", "Scikit-learn", "pandas", "numpy", "OpenCV"],
      github: "https://github.com/vaibhav-pruthi/DataScience_project",
    
    },
   
    
  ];  