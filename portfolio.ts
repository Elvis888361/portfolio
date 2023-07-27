import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Elvis Ndegwa Kangethe',
  title: "Hi all, I'm Elvis",
  description:
    "As a passionate Full Stack web developer, I bring extensive experience in developing dynamic web applications using a wide range of technologies, including Python, Django, React.js, Next.js, Node.js, Laravel, Frappe, Java, and Android. Additionally, I am well-versed in creating interactive data analysis solutions through Jupyter notebooks. With a proven track record in delivering successful projects, I thrive on crafting innovative and user-friendly solutions that push the boundaries of web development. My enthusiasm for learning and staying up-to-date with the latest trends in the industry enables me to tackle complex challenges and deliver top-notch results for every project I undertake.",
  resumeLink:
    'https://drive.google.com/file/d/1p2Bg8OwrazMEhCwXWg8m4eWho42VEajR/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'Elvis888361',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://kangetheelvis.netlify.app/',
  linkedin: 'https://www.linkedin.com/in/elvis-ndegwa-b0b785197/',
  github: 'https://github.com/Elvis888361',
  instagram: 'https://www.instagram.com/elvisndesh',
  facebook: 'https://www.facebook.com/elvis.ndegwa.31',
  twitter: 'https://twitter.com/elvisndegwa01',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & frappe REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Dedan Kimathi University of Technology',
    subHeader: 'Master of Science in Business Information Technology',
    duration: 'September 2018 - April 2023',
    desc: 'Participated in all activities of the school. went to all lab session.',
    grade: 'SecondClass Upper Division',
    descBullets: [
      'Participated in different Hackathorn Challenges',
      'Participated in co curricular activities :played Hand Ball',
    ],
  },
  {
    schoolName: 'Cisco Network Academy',
    subHeader: 'Certified Candidate',
    duration: 'September 2019 - April 2022',
    desc: 'Participated in 4 classes where i got i was certified',
    grade: '75%',
    descBullets: [
      '1. CCNA Routing and Switching: Introduction to Networks',
      '2. Introduction to Cybersecurity',
      '3. Introduction to IoT',
      '4. JavaScript Essentials 1 (JSE)',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'FullStack Developer',
    company: 'Cbigdl Limited',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2023',
    desc: 'I am currently employed as a versatile Full Stack developer, specializing in building a diverse range of applications, including system ERPs, websites, and various other types of applications. My expertise spans the entire development stack, allowing me to seamlessly work on both the front-end and back-end components of projects. Through my skills and dedication, I take pride in delivering high-quality, robust, and efficient solutions that cater to the unique needs of each project.',
  },
  {
    role: 'FullStack Developer',
    company: 'Upeosoft Developer',
    companyLogo: '/img/icons/common/u.jpeg',
    date: 'Jan 2022',
    desc: 'As a dedicated Full Stack developer, my primary focus revolves around crafting robust and efficient systems, ERPs, websites, and applications. My passion for technology and problem-solving drives me to continuously enhance my skills and deliver exceptional solutions that cater to diverse business needs. With a keen eye for detail and a creative mindset, I take pride in building seamless and user-friendly experiences that leave a lasting impact on users. As I continue to grow in my career, I am committed to pushing the boundaries of innovation and contributing positively to the ever-evolving landscape of web development.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and nodejs bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/Elvis888361',
    link: 'https://kangetheelvis.netlify.app/',
  },
  {
    name: 'AI Development using Apis',
    desc: 'Has a conversation Ai,code generation Ai .Image generator video generator',
    github: 'https://github.com/Elvis888361/AI-API-SAAS',
  },
  {
    name: 'cbigdl limited website',
    desc: 'build a react website for cbigdl limited',
    github: 'https://github.com/Elvis888361/CBIGDL',
    link:'http://cbigdl.com',
  },
  {
    name: 'DekutAirDuka (Ecommerce)',
    desc: 'Created an easier way for sellers and Buyers to connect and make purchase and sales',
    github: 'https://github.com/Elvis888361/Dekutr-AirDuka',
  },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Elvis Ndegwa kagethe',
  description:
    'A passionate Full Stack Web Developer and Android Developer.',
  author: 'Elvis Ndegwa Kangethe',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://kangetheelvis.netlify.app/',
  keywords: [
    'Elvis',
    'Elvis Ndegwa',
    'Portfolio',
    'Elvis Portfolio ',
    'Elvis Ndegwa Portfolio',
  ],
};
