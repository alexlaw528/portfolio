import overvue from "./images/overvue.jpg";
import supersonic_inlet from "./images/supersonic_inlet.png";
import mock_interview from "./images/mock_interview.png";
import font_customizer from "./images/font_customizer.png"
import astar_pathfinder from "./images/astar_pathfinder.png"
import portfolio from "./images/portfolio.png"

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
        link: "https://github.com/alexlaw528/2D_analysis_supersonic_inlet",
      }
    ],
    tech: ["MATLAB", "CFD", "Modeling"],
    year: "2021",
  }, 
  {
    project: 'A* Pathfinding Visualizer',
    image: astar_pathfinder,
    description: "Interactive pathfinding visualization using A* search algorithm",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "https://github.com/alexlaw528/astar_pathfinding",
      },
      {
        location: "Website",
        icon: faArrowUpRightFromSquare,
        link: "https://alexlaw528.itch.io/a-pathfinder",
      },
    ],
    tech: ["Python", "pygame", "pygbag"],
    year: "2022",
  }, 
  {
    project: 'Developer Portfolio',
    image: portfolio,
    description: "Portfolio-ception!",
    links: [
      {
        location: "Github",
        icon: faGithub,
        link: "https://github.com/alexlaw528/portfolio",
      },
      {
        location: "Website",
        icon: faArrowUpRightFromSquare,
        link: "https://alexlaw.dev/",
      },
    ],
    tech: ["React", "scss", "Netlify", "Netlify-lambda", "webpack", "emailjs"],
    year: "2022",
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