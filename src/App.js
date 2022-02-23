import "./App.css";
import "animate.css";
import "./lines.sass";
import "./style.scss";
// import Typing from "react-typing-animation";
import Name from "./name";
import { Grid } from "@mui/material";
import Css from "./logos/csssvg.svg";
import html from "./logos/html5.svg";
import js from "./logos/js_logo.svg";
import rt from "./logos/react.png";
import TimeLine from "./TimeLine";
import mail from "./logos/mail.svg";
import phlogo from "./logos/phone.svg";
import cvlogo from "./logos/cv.svg";
import ipss from "./logos/ipss.png";
import blogr from "./logos/blogr.png";
import github from "./logos/github.svg";
import linkedin from "./logos/linkedin.svg";
import s from "./logos/s.svg";
import Skills from "./Skills";
import SkillAnimation from "./SkillAnimate/SkillAnimation";
import photograph from "./logos/my_picture.jpeg";
import myPdf from "./snehasisResume.pdf";
import keep1 from "./logos/keep1.png";

import axiosIcon from "./logos/axiosColor.svg";
import firebaseIcon from "./logos/firebase.svg";
import reactIcon from "./logos/reactColor.svg";
import muiIcon from "./logos/mui.svg";
import tailwindIcon from "./logos/tailsvg.svg";
import Moon from "../src/cssGalaxy/Moon";
//import moon from "./logos/moon.svg";
//import tailwindcss from "tailwindcss";
import wave from "./logos/wave.svg";
function App() {
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
      color: "rgb(87,115,255)",
      fontWeight: "800",
      marginLeft: "20px",
    },

    downCV: {
      width: "200px",
      position: "absolute",
      right: "2rem",
      top: "2rem",
      zIndex: "5",
    },
    p50: { paddingTop: "50px" },
    p100: { paddingTop: "100px" },
    s51container: {
      padding: "50px",
      background: "rgb(37, 24, 24)",
      marginTop: "100px",
      rowGap: "20px",
      float: "left",
    },
  };
  const blob2 = (
    <svg
      className="blob1 loading"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="rgb(248,113,113)"
        d="M60,-20.4C68.4,6.4,59.5,38,40.4,50.7C21.4,63.4,-7.8,57.2,-30.8,40.8C-53.7,24.5,-70.5,-1.9,-64.3,-25.6C-58.1,-49.3,-29.1,-70.3,-1.6,-69.7C25.8,-69.2,51.6,-47.2,60,-20.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  return (
    <div className="snap-y snap-mandatory pt-24 overflow-hidden ">
      <div id="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div style={style.slogo}>
        <img
          src={s}
          alt="slogo"
          className="slogo  hover:scale-110 ease-in-out duration-300 "
        />
        <h1 className="text-[12px] md:text-[30px] " style={style.name}>
          Snehasis Debbarman
        </h1>
      </div>

      <a style={style.downCV} href={myPdf} download="snehasisResume.pdf">
        <button className="dcv hover:bg-red-400 hover:text-slate-900">
          Download CV
        </button>
      </a>
      {/* <Nav className="" /> */}
      <span className=" flex email content-center">
        <a href="mailto: snehasisdebbarman2016@gmail.com">
          snehasisdebbarman2016@gmail.com
        </a>
      </span>
      <section className=" snap-start snap-always pl-10">
        <div className="slate-300 full">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} className="circle-text-container">
              <div className="main">
                <div className="circle"></div>
              </div>
              <Name />
              <Grid container>
                <Grid item xs={3} className="pt-28 md:pt-5">
                  <img
                    src={tailwindIcon}
                    className="images  animate__animated animate__fadeInLeft animate__delay-2s"
                    alt="skill Logo"
                  />
                </Grid>
                <Grid item xs={3} className="pt-28 md:pt-5">
                  <img
                    src={Css}
                    className="images  animate__animated animate__fadeInLeft animate__delay-3s"
                    alt="skill Logo"
                  />
                </Grid>
                <Grid item xs={3} className="pt-28 md:pt-5">
                  <img
                    src={reactIcon}
                    className="images  animate__animated animate__fadeInLeft animate__delay-4s"
                    alt="skill Logo"
                  />
                </Grid>
                <Grid item xs={3} className="pt-28 md:pt-5">
                  <img
                    src={js}
                    className="images  animate__animated animate__fadeInLeft animate__delay-5s"
                    alt="skill Logo"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="blob-container">
                {/* <Moon className="blob1 " /> */}
                {/* {blob2}
                {blob1()} */}
              </div>
            </Grid>
            <img src={wave} style={{}} className="waves" alt="" />
          </Grid>
        </div>
      </section>
      <section className=" snap-always section-two mt-4 ">
        <Grid container>
          <Grid item xs={12} md={6} data-aos="zoom-in-right">
            <div className="sm:pt-20 ">
              <h2 className=" about text-slate-400  font-bold text hover:text-red-400 ">
                <span className="text-red-400  sf-mono about-text ">1.</span>{" "}
                About me
              </h2>
              <div className="text-slate-400  mt-5 mb-20 about-body">
                Inventive frontend developer expertise in HTML, CSS,
                Javascript/ES6/ES2017 , ReactJs,Redux with willingness to learn
                and master Back-end Development, Cloud and Web Server
              </div>

              <div></div>
            </div>
            <div>
              <h2 className=" about text-slate-400 font-bold text hover:text-red-400 ">
                {" "}
                <span className="text-red-400 sf-mono about-text">2.</span>{" "}
                Education
              </h2>
              <div className="text-slate-400  mt-5 about-body">
                <TimeLine></TimeLine>
              </div>

              <div></div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="flex justify-items-center items-center p-16"
          >
            <img
              src={photograph}
              alt="potrait"
              className="photograph  hover:scale-105 ease-in-out duration-300 "
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="flex justify-items-center items-center p-16 relative"
          >
            {/* <img src={moon} alt="" /> */}
          </Grid>
          <Grid item xs={12} md={6} data-aos="zoom-in-left"></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div>
              <h2 className=" about text-slate-400 mt-20 font-bold text hover:text-red-400 ">
                {" "}
                <span className="text-red-400 sf-mono about-text">3.</span>{" "}
                Professional History
              </h2>
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

          <Grid item xs={12} md={6} data-aos="zoom-in-left">
            <div style={style.p50}>
              <h2 className=" about text-slate-400 font-bold text hover:text-red-400 ">
                {" "}
                <span className="text-red-400 sf-mono about-text">4.</span>{" "}
                Personal Projects
              </h2>
              <div className="text-slate-400  mt-5 about-body">
                <ol>
                  <li>
                    <h3 className=" text-slate-400  font-semiBold text ">
                      <span className="text-red-400 sf-mono about-text">
                        I.
                      </span>
                      IP Address Tracker
                      <span className="text-red-400 sf-mono float-right">
                        1 Jan'22 - 5 Jan'22
                      </span>
                    </h3>
                    <div className="text-slate-400 mt-5">
                      <ul>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Worked on IP Address Tracker using ReactJS, Axios,
                            Material UI and leaflet Created and implemented a
                            custom CSS grid system, with CSS media queries
                            formobile responsiveness.
                          </p>
                        </li>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Performed key role in the development process of UI
                            portion of web application
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
                <div className="tools_grid p-10 sm:p-2">
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={muiIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300   "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0  w-1/4 overflow-hidden">
                      <img
                        src={reactIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0  w-1/4 overflow-hidden">
                      <img
                        src={tailwindIcon}
                        alt=""
                        className="images  ease-in-out duration-300  hover:scale-105  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={axiosIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href="https://snehasisdebbarman.github.io/ip-react/">
              <img
                className="ipHolder hover:scale-105 ease-in-out duration-300 "
                src={ipss}
                alt="ip"
              />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={style.p100}>
              <div className="text-slate-400  mt-5 about-body">
                <ol>
                  <li>
                    <h3 className=" text-slate-400  font-semiBold text ">
                      <span className="text-red-400 sf-mono about-text">
                        II.
                      </span>
                      Google Keep Clone using React JS, Firebase and Tailwind
                      CSS
                      <span className="text-red-400 sf-mono float-right">
                        Feb'22 - Feb'22
                      </span>
                    </h3>
                    <div className="text-slate-400 mt-5">
                      <ul>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Created Google Keep Clone using React , Firebase
                            firestore , firebase Authentication and Tailwind CSS
                          </p>
                        </li>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Implemented CRUD operation in This project
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
                <div className="tools_grid p-10 sm:p-2">
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={muiIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300   "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={reactIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300   "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={tailwindIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={firebaseIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href="https://snehasisdebbarman.github.io/google-keep-clone/">
              <img
                className="ipHolder  hover:scale-105 ease-in-out duration-300 "
                src={keep1}
                alt="keep"
              />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={style.p100}>
              <div className="text-slate-400  mt-5 about-body">
                <ol>
                  <li>
                    <h3 className=" text-slate-400  font-semiBold text ">
                      <span className="text-red-400 sf-mono about-text">
                        III.
                      </span>
                      Resposive Blog Landing page using MUI and Tailwind CSS
                      <span className="text-red-400 sf-mono float-right">
                        10 Jan'22 - 15 Jan'22
                      </span>
                    </h3>
                    <div className="text-slate-400 mt-5">
                      <ul>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Worked on Blog Starting page using ReactJS,Material
                            UI,Taiwind CSS Created and implemented a custom CSS
                            grid system, with CSS media queries for mobile
                            responsiveness.
                          </p>
                        </li>
                        <li>
                          <p className=" text-slate-400 ml-5 ">
                            <span className="text-red-400 sf-mono">* </span>
                            Performed key role in the development process of UI
                            portion of web application
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
                <div className="tools_grid p-10 sm:p-2">
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={muiIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={reactIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300  "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={tailwindIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300   "
                      />
                      {/* <!-- Column Content --> */}
                    </div>

                    <div className=" my-2 px-2  sm:px-0 sm:my-0 w-1/4 overflow-hidden">
                      <img
                        src={axiosIcon}
                        alt=""
                        className="images hover:scale-125 ease-in-out duration-300   "
                      />
                      {/* <!-- Column Content --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href="https://snehasisdebbarman.github.io/blogr/">
              <img
                className="ipHolder  hover:scale-105 ease-in-out duration-300 "
                src={blogr}
                alt="blog"
              />
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={style.p100}>
              <h2 className=" about text-slate-400 font-bold text hover:text-red-400 ">
                {" "}
                <span className="text-red-400 sf-mono about-text">5.</span>{" "}
                Skills
              </h2>
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
      <section className="section-51">
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

  function blob1() {
    return (
      <svg
        className="blob2 loading"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#5EEAD4"
          d="M66.2,-26.6C72.1,-3.5,53.6,22.5,32,36.4C10.3,50.4,-14.6,52.3,-32.5,40.3C-50.4,28.4,-61.3,2.5,-54.7,-21.6C-48.1,-45.8,-24.1,-68.1,3.1,-69C30.2,-70,60.4,-49.7,66.2,-26.6Z"
          transform="translate(100 100)"
        />
      </svg>
    );
  }
}

export default App;
