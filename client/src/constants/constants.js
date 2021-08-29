import {
  DiCodeBadge,
  DiCode,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
import { BiCodeBlock, BiFile } from "react-icons/bi";
import { SiPostman, SiFigma, SiRedux } from "react-icons/si";

export const projects = [
  {
    title: "QKart",
    description:
      "An E-Commerce application offering a variety of products for customers to choose from.Implemented the core logic for authentication , shopping cart and checkout for customers.",
    image: "/images/QKart.png",
    tags: ["React", "Node", "Express", "MongoDB", "REST API"],
    source: "https://www.crio.do/portfolio/ranjanrajeev9845/",
    visit: "https://qkart-first.netlify.app/",
    id: 0,
  },
  {
    title: "QTrip",
    description:
      "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
    image: "/images/QTrip.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    source: "https://www.crio.do/portfolio/ranjanrajeev9845/",
    visit: "https://qtriptravels.netlify.app/",
    id: 1,
  },
  {
    title: "XBoard",
    description:
      "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
    image: "/images/NewsFeed.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    source: "https://www.crio.do/portfolio/ranjanrajeev9845/",
    visit: "https://todaynewsfeed.netlify.app/",
    id: 2,
  },
  {
    title: "Portfolio Website",
    description:
      "It is a responsive portfolio website which uses Nodemailer to send email of people who wants to get in touch.",
    image: "/images/Portfolio.png",
    tags: ["React", "Node", "Express"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const ProgrammingSkills = [
  {
    img: <DiCodeBadge size="5rem" style={{ alignSelf: "center" }} />,
    text: "C++",
  },
  { img: <BiFile size="5rem" />, text: "STL" },
  { img: <DiCode size="5rem" />, text: "Data Structures & Algorithms" },
  {
    img: <BiCodeBlock size="5rem" />,
    text: "Object Oriented Programming Sytems",
  },
];

export const Frontend = [
  { img: <DiHtml5 size="5rem" />, text: "HTML" },
  { img: <DiCss3 size="5rem" />, text: "CSS" },
  { img: <DiBootstrap size="5rem" />, text: "Bootstrap" },
  { img: <DiJsBadge size="5rem" />, text: "JavaScript" },
  { img: <DiReact size="5rem" />, text: "React & ReactNative" },
];

export const Backend = [
  { img: <DiNodejs size="5rem" />, text: "NodeJS" },
  { img: <DiNodejsSmall size="5rem" />, text: "ExpressJS" },
  { img: <DiMongodb size="5rem" />, text: "MongoDB" },
  { img: <DiMysql size="5rem" />, text: "MySQL" },
];

export const OtherTools = [
  { img: <SiRedux size="4rem" />, text: "Redux" },
  { img: <DiGit size="5rem" />, text: "Git" },
  { img: <SiPostman size="4rem" />, text: "Postman" },
  { img: <SiFigma size="4rem" />, text: "Figma" },
];
