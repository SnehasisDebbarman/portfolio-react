import "./App.css";
import "animate.css";
import "./lines.sass";
import "./style.scss";

import Bounce from "react-reveal/Bounce";

import Name from "./name";
import { Grid } from "@mui/material";

import TimeLine from "./TimeLine";
import mail from "./logos/mail.svg";
import phlogo from "./logos/phone.svg";
import cvlogo from "./logos/cv.svg";

import github from "./logos/github.svg";
import linkedin from "./logos/linkedin.svg";
import s from "./logos/s.svg";
import Skills from "./Skills";
import SkillAnimation from "./SkillAnimate/SkillAnimation";
import photograph from "./logos/my_picture.jpeg";
import myPdf from "./snehasisResume.pdf";

import axiosIcon from "./logos/axiosColor.svg";
import firebaseIcon from "./logos/firebase.svg";
import reactIcon from "./logos/reactColor.svg";
import muiIcon from "./logos/mui.svg";
import tailwindIcon from "./logos/tailsvg.svg";
import reduxIcon from "./logos/redux.svg";
import Css from "./logos/csssvg.svg";
import js from "./logos/js_logo.svg";

import TailwindCard from "./TailwindCard/TailwindCard";
import ProjectData from "./TailwindCard/ProjectData";
//data
const SkillIconGrid = ({ icon }) => {
  return (
    <Grid
      item
      xs={1}
      md={1}
      className="md:pt-5 hover:scale-110 ease-in-out duration-300"
    >
      <img
        src={icon}
        className="images  animate__animated animate__fadeInLeft animate__delay-2s"
        alt="skill Logo"
      />
    </Grid>
  );
};
function App() {
  const skillIconList = [
    reactIcon,
    reduxIcon,
    js,
    Css,
    firebaseIcon,
    tailwindIcon,
    axiosIcon,
    muiIcon,
  ];
  const style = {
    slogo: {
      position: "absolute",
      left: "2rem",
      top: "2rem",
      zIndex: "5",
      display: "flex",
      alignItems: "center",
    },
    name: {
      fontWeight: "800",
      marginLeft: "20px",
    },

    downCV: {
      width: "auto",
      position: "absolute",
      right: "2rem",
      top: "2rem",
      zIndex: "5",
    },
    p50: { paddingTop: "50px" },
    p100: { paddingTop: "100px" },
    s51container: {
      padding: "50px",
      background: "#03101a",
      marginTop: "100px",
      rowGap: "20px",
      float: "left",
    },
  };

  return (
    <div className="snap-y snap-mandatory pt-24 overflow-hidden ">
      <div className="cover top-0 h-[100vh] w-[100vw] absolute "></div>
      <div id="stars-container">
        <div class="star"></div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div style={style.slogo}>
        <img
          src={s}
          alt="slogo"
          className="w-[40px] md:w-16   hover:scale-110 ease-in-out duration-300 "
        />
        <h1
          className="text-[10px] md:text-[30px] text-red-400 hover:text-red-300 hover:scale-110 ease-in-out duration-300"
          style={style.name}
        >
          <Bounce left cascade>
            Snehasis Debbarman
          </Bounce>
        </h1>
      </div>

      <div style={style.downCV} className=" hidden lg:block ">
        <a
          href="#about"
          onClick={() => window.location.replace("/#about")}
          className="text-red-400 py-2 px-4  "
        >
          {" "}
          About Me
        </a>
        <a
          href="#Work"
          onClick={() => window.location.replace("/#work")}
          className="text-red-400 py-2 px-4  "
        >
          {" "}
          Work
        </a>
        <a
          href="#projects"
          onClick={() => window.location.replace("/#projects")}
          className="text-red-400 py-2 px-4  "
        >
          {" "}
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => window.location.replace("/#contact")}
          className="text-red-400 py-2 px-4  "
        >
          {" "}
          Contact
        </a>
        <a href={myPdf} download="snehasisResume.pdf">
          {" "}
          <button className="py-2 px-4 text-bold bg-red-400 text-slate-100 rounded-[5px] ">
            Resume
          </button>
        </a>
      </div>
      {/* <Nav className="" /> */}
      <span className="email flex  content-center">
        <a href="mailto: snehasisdebbarman2016@gmail.com">
          snehasisdebbarman2016@gmail.com
        </a>
      </span>
      <section className=" snap-start snap-always pl-10 ">
        <div className="h-[100vh] flex ">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              className="flex justify-center items-center h-[60vh]"
            >
              {/* <div className="main">
                <div className="circle"></div>
              </div> */}
              <Name />
            </Grid>
            <Grid container className="pt-[30vh]">
              <Grid
                item
                xs={2}
                className="md:pt-5 hover:scale-110 ease-in-out duration-300"
              ></Grid>
              {skillIconList.map((item) => (
                <SkillIconGrid icon={item} />
              ))}
            </Grid>
          </Grid>
        </div>
      </section>
      <section className=" snap-always section-two mt-4" id="about ">
        <Grid container>
          <Grid item xs={12} className="pt-10">
            <h2 className=" about font-bold text text-red-400 flex flex-row items-center justify-center">
              <span className="text-red-400  sf-mono about-text ">
                1. About Me
              </span>{" "}
              <div class=" border-t border-slate-600 flex-grow opacity-50 ml-4 mr-10"></div>
            </h2>
          </Grid>
          <Grid item xs={12} md={6} data-aos="zoom-in-right">
            <div className="sm:pt-20 ">
              <div className="text-slate-400  mt-5 mb-20 about-body">
                Inventive frontend developer expertise in HTML, CSS,
                Javascript/ES6/ES2017 , ReactJs,Redux with willingness to learn
                and master Back-end Development, Cloud and Web Server
              </div>

              <div></div>
            </div>
            <div>
              <div className="text-slate-400  mt-5 about-body"></div>
              <div></div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="flex justify-items-center items-center p-5"
          >
            <img
              src={photograph}
              alt="potrait"
              className="photograph  hover:scale-105 ease-in-out duration-300 "
            />
          </Grid>
          <Grid item xs={12} className="pt-10">
            <h2 className=" about font-bold text text-red-400 flex flex-row items-center justify-center">
              <span className="text-red-400  sf-mono about-text ">
                2. Educational History
              </span>{" "}
              <div class=" border-t border-slate-600 flex-grow opacity-50 ml-4 mr-10"></div>
            </h2>
          </Grid>
          <Grid item xs={12} className="pt-10 pl-20 flex  items-center">
            <TimeLine></TimeLine>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="pt-10" id={"work"}>
            <h2 className=" about font-bold text text-red-400 flex flex-row items-center justify-center">
              <span className="text-red-400  sf-mono about-text ">
                3. Professional History
              </span>{" "}
              <div class=" border-t border-slate-600 flex-grow opacity-50 ml-4 mr-10"></div>
            </h2>
          </Grid>
          <Grid item xs={12}>
            <div>
              <div className="text-slate-400  mt-5 about-body">
                <ol>
                  <li>
                    <h3 className=" text-slate-400  font-semiBold text ">
                      <span className="text-red-400 sf-mono about-text">
                        I.
                      </span>{" "}
                      ITC Infotech India LTD{" "}
                      <span className="text-red-400 sf-mono float-right">
                        Jan'21-present
                      </span>
                    </h3>
                    <div className="text-slate-400 mt-5">
                      <ul>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Assesing project requirements using Agile & Scrum
                            principles related to the high -volume online
                            service that helped priortize developing activities.
                          </p>
                        </li>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Conducting requirement gathering and validation as a
                            part of collaboration for the high-profile external
                            web that helped to address UI/UX parts of the system
                            user's interface before active phase of development
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className=""></Grid>
          <Grid item xs={12} className="pt-10" id="projects">
            <h2 className=" about font-bold text text-red-400 flex flex-row items-center justify-center">
              <span className="text-red-400  sf-mono about-text ">
                4. Personal Projects
              </span>{" "}
              <div class=" border-t border-slate-600 flex-grow opacity-50 ml-4 mr-10"></div>
            </h2>
          </Grid>
          <Grid item xs={12} className="p-10 " id="projects">
            <div className="flex flex-col md:flex-row gap-10">
              {ProjectData.map((project) => (
                <div>
                  <TailwindCard project={project} />
                </div>
              ))}
            </div>
          </Grid>

          <Grid item xs={12} className="pt-10">
            <h2 className=" about font-bold text text-red-400 flex flex-row items-center justify-center">
              <span className="text-red-400  sf-mono  ">5. Skills</span>{" "}
              <div class=" border-t border-slate-600 flex-grow opacity-50 ml-4 mr-10"></div>
            </h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={style.p100}>
              <div className="text-slate-400  mt-5 about-body">
                <Skills />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillAnimation />
          </Grid>
        </Grid>
      </section>
      <section className="section-51" id="contact">
        <Grid
          container
          style={style.s51container}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
          >
            <img
              src={s}
              alt="slogo"
              style={{ width: "80px", paddingLeft: "10px" }}
              className="hover:scale-110 ease-in-out duration-300"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            {" "}
            <p
              className=" text-slate-400 ml-5 hover:scale-110 ease-in-out duration-300 "
              style={{ display: "flex", gap: "10px" }}
            >
              <img src={github} style={{ width: "20px" }} alt="github" />
              <span className="text-red-400 sf-mono">
                {" "}
                <a href="https://github.com/SnehasisDebbarman">Github</a>
              </span>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            {" "}
            <p
              className=" text-slate-400 ml-5 hover:scale-110 ease-in-out duration-300 "
              style={{ display: "flex", gap: "10px" }}
            >
              <img src={linkedin} style={{ width: "20px" }} alt="linkedin" />
              <span className="text-red-400 sf-mono">
                {" "}
                <a href="https://www.linkedin.com/in/snehasis-debbarman-19833b159/">
                  Linkedin
                </a>
              </span>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            {" "}
            <p
              className=" text-slate-400 ml-5 hover:scale-110 ease-in-out duration-300 "
              style={{ display: "flex", gap: "10px" }}
            >
              <img src={mail} style={{ width: "20px" }} alt="mail" />
              <span className="text-red-400 sf-mono">
                {" "}
                <a href="mailto: snehasisdebbarman2016@gmail.com">
                  Leave a Mail
                </a>
              </span>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            {" "}
            <p
              className=" text-slate-400 ml-5 hover:scale-110 ease-in-out duration-300 "
              style={{ display: "flex", gap: "10px" }}
            >
              <img src={cvlogo} style={{ width: "20px" }} alt="cv" />
              <span className="text-red-400 sf-mono">
                {" "}
                <a href={myPdf} download="snehasisResume.pdf">
                  Download CV
                </a>
              </span>
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="footer-grid"
            justifyContent="flex-start"
            alignItems="center"
          >
            {" "}
            <a
              href="tel:+919647149128"
              className=" text-slate-400 ml-5 hover:scale-110 ease-in-out duration-300 "
              style={{ display: "flex", gap: "10px" }}
            >
              <img src={phlogo} style={{ width: "20px" }} alt="phone" />
              <span className="text-red-400 sf-mono">Give a Call</span>
            </a>
          </Grid>
        </Grid>
      </section>
      {/* <section className="snap-always section-two p-10 m-10"></section> */}
    </div>
  );
}

export default App;
