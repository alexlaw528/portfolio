import overvue from "./images/overvue.jpg";
import supersonic_inlet from "./images/supsersonic_inlet.png";
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
    tech: ["Vue", "Electron", "TypeScript"]
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
    tech: ["MATLAB"]
  }, 
];

export default projectsInfo