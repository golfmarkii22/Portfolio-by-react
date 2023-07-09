import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 20,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 0,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 0,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Barista",
    tenure: "Jul 2013 - Sep 2015",
    role: "Barista, Coffee Cafe'",
    detail:
      "Serve coffee or light meals to customers in the coffee shop or bar. The barista must have knowledge and techniques to control coffee machines and coffee grinders. Including techniques for serving great quality coffee.",
  },
  {
    place: "Military",
    tenure: "Oct 2015 - Oct 2017",
    role: "Conscription",
    detail:
      "All Thai men must enter military service. In which all Thai men must understand the duty of registering the military personnel. receiving a summons screening, recruiting, recruiting, mobilizing and demobilizing Thai men Which you can learn more from the Ministry of Defense website.",
  },
  {
    place: "Fiber home internet marketing",
    tenure: "Jul 2019 - Feb 2022",
    role: "Salesperson internet home",
    detail:
      "Responsible for contacting, acquiring customers, selling, motivating customers. Make an intention and decide to buy. Provide service before and after the sale. including giving advice to customers",
  },
  {
    place: "Freelance web developer",
    tenure: "Dec 2022 - July 2023",
    role: "Frontend Web Developer",
    detail:
      "Design and develop front-end websites to come out beautiful and meet the needs of users. And updated to be modern and ready to support use on all screens",
  },
];

export const comments = [
  {
    img: "./review1.png"
  },
  {
    img: "./review2.png"
  },
  {
    img: "./review3.png"
  },
  {
    img: "./review4.png"
  },
  {
    img: "./review1.png"
  },
  {
    img: "./review2.png"
  },
  {
    img: "./review3.png"
  },
  {
    img: "./review4.png"
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
