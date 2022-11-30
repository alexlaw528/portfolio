import overvue from "./images/overvue.jpg";
import supersonic_inlet from "./images/supersonic_inlet.png";
import mock_interview from "./images/mock_interview.png";
import font_customizer from "./images/font_customizer.png"

import {
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const projectsInfo = [
  {
    project: 'OverVue',
    image: overvue,
    description: "Utilized Vue.js framework to develop a desktop application allowing users to seamlessly create entire Vue applications through a drag and drop UI relieving developers of time-intensive project setup and initialization",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "https://github.com/open-source-labs/OverVue/",
      },
      {
        location: "Website",
        icon: faArrowUpRightFromSquare,
        link: "https://www.overvue.org/",
      },
      {
        location: "LinkedIn",
        icon: faLinkedin,
        link: "https://www.linkedin.com/company/77007166/admin/",
      }
    ],
    tech: ["Vue", "Electron", "TypeScript"],
    year: "2022",
  }, 
  {
    project: 'CFD Analysis of Supersonic Inlet',
    image: supersonic_inlet,
    description: "2D computational fluid dynamic analysis of a supersonic inlet. Applied a mesh generating algorithm to discretize the inlet domain and utilized Steger-Warming and Roe schemes to predict flow properties within the inlet",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "",
      },
      {
        location: "Website",
        icon: faArrowUpRightFromSquare,
        link: "https://www.overvue.org/"
      }
    ],
    tech: ["MATLAB", "CFD", "Modeling"],
    year: "2021",
  }, 
  {
    project: 'Mock Interview Simulator',
    image: mock_interview,
    description: "Mock interview simulator built-in code editor, whiteboard, and text editor",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "https://github.com/al-jy-fd-ew/mocked",
      },
    ],
    tech: ["React.js", "Express.js"],
    year: "2022",
  }, 
  {
    project: 'Font Modifier Chrome Extension',
    image: font_customizer,
    description: "Chrome extension to quickly update font characteristics in your browser!",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "https://github.com/al-jy-fd-ew/mocked",
      },
    ],
    tech: ["Chrome-Extension-API", "JavaScript"],
    year: "2022",
  }, 
];

export default projectsInfo