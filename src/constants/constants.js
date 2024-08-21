import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import pathtopeace from "../assets/pathtopeace.png";
import besharam from "../assets/besharam.svg";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";
import s8 from "../assets/s8.svg";
import s9 from "../assets/s9.svg";
import s10 from "../assets/s10.svg";
import s11 from "../assets/s11.svg";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const projectCards = [
  {
    title: "myquizcode",
    imgSrc: p1,
    liveLink: "https://myquizcode.com/",
    private: true,
  },
  {
    title: "pathtopeace",
    imgSrc: pathtopeace,
    liveLink: "https://path2peace.in/",
    private: true,
  },
  {
    title: "f.a.r bites",
    imgSrc: p2,
    liveLink: "https://farbites.netlify.app/",
    private: true,
  },
  {
    title: "besharamchat",
    imgSrc: besharam,
    liveLink: "https://besharamchat.netlify.app/",
    gitLink: "https://github.com/besharamcode/besharamchat_ui",
  },
  {
    title: "ochi",
    imgSrc: p3,
    gitLink: "https://github.com/besharamcode/ochi-clone",
    liveLink: "https://besharamochi.netlify.app/",
  },
];

export const skillsCards = [
  {
    title: "html",
    imgSrc: s1,
  },
  {
    title: "css",
    imgSrc: s2,
  },
  {
    title: "js",
    imgSrc: s3,
  },
  {
    title: "react",
    imgSrc: s4,
  },
  {
    title: "redux",
    imgSrc: s5,
  },
  {
    title: "nextjs",
    imgSrc: s6,
  },
  {
    title: "tailwind",
    imgSrc: s7,
  },
  {
    title: "github",
    imgSrc: s8,
  },
  {
    title: "node",
    imgSrc: s9,
  },
  {
    title: "express",
    imgSrc: s10,
  },
  {
    title: "mongodb",
    imgSrc: s11,
  },
];

export const contactCards = [
  {
    title: "email",
    link: "mailto:besharamcode@gmail.com",
    icon: faEnvelope,
  },
  {
    title: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=9328936499",
    icon: faWhatsapp,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/besharamcode/",
    icon: faLinkedin,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/besharamcode/",
    icon: faInstagram,
  },
  {
    title: "github",
    link: "https://github.com/besharamcode",
    icon: faGithub,
  },
  {
    title: "twitter",
    link: "https://twitter.com/Besharamcode",
    icon: faTwitter,
  },
];
