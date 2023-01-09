import overvue_1 from "./images/experience_carousel/overvue_1.png";
import overvue_2 from "./images/experience_carousel/overvue_2.png";
import overvue_3 from "./images/experience_carousel/overvue_3.png";
import overvue_4 from "./images/experience_carousel/overvue_4.png";
import axonics from "./images/experience_carousel/axonics.png";
import bwi_carto3 from "./images/experience_carousel/bwi_carto3.png";
import pancas_c10 from "./images/experience_carousel/pancas_c10.png";
import pancas_puma from "./images/experience_carousel/pancas_puma.png";
import tasa_1 from "./images/experience_carousel/tasa_1.png";
import tasa_2 from "./images/experience_carousel/tasa_2.png";

const experienceInfo = [
  {
    company: 'OverVue',
    position: "Software Engineer",
    dateStr: "July 2022 - Present",
    description: [
      "Created a desktop application allowing Vue developers to seamlessly create entire Vue applications through a drag and drop UI relieving developers of time-intensive project setup and initialization"
    ]
    ,
    carouselImage: [
      overvue_1,
      overvue_2,
      overvue_3,
      overvue_4
    ]
  }, 
  {
    company: 'SARA',
    position: "Mechanical Engineer",
    dateStr: "April 2019 - May 2022",
    description: [
      "Developed PANCAS and TASA, acoustic sense and avoid systems enabling BVLOS flights for Group 1 and Group 2 UAVs",
    ]
    ,
    carouselImage: [
      pancas_c10,
      pancas_puma,
      tasa_1,
      tasa_2
    ]
  },
  {
    company: 'Molex',
    position: "Mechanical Engineer",
    dateStr: "July 2016 - April 2019",
    description: [
      "Developed tooling and processes required to manufacture Class I/II medical devices"
    ]
    ,
    carouselImage: [
      axonics,
      bwi_carto3
    ]
  },
  {
    company: "Education",
    position: ["University of California, Los Angeles", "University of California, Irvine"],
    dateStr: ["MS Mechanical Engineering", "BS Mechanical Engineering"],
    description: ["August 2020 - June 2022", "October 2012 - June 2016"]
    ,
    carouselImage: [
      axonics,
      bwi_carto3
    ]
  }
];

export default experienceInfo;