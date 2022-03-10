import React from "react";
import { Grid } from "@mui/material";

import ipss from "./logos/ipss.png";
import blogr from "./logos/blogr.png";
import keep1 from "./logos/keep1.png";

import axiosIcon from "./logos/axiosColor.svg";
import firebaseIcon from "./logos/firebase.svg";
import reactIcon from "./logos/reactColor.svg";
import muiIcon from "./logos/mui.svg";
import tailwindIcon from "./logos/tailsvg.svg";
import Moon from "../src/cssGalaxy/Moon";

export default function extracode() {
  const style = {
    p50: { paddingTop: "50px" },
  };
  return (
    <div>
      {" "}
      <Grid item xs={12} md={6} data-aos="zoom-in-left">
        <div style={style.p50}>
          <div className="text-slate-400  mt-5 about-body">
            <ol>
              <li>
                <h3 className=" text-slate-400  font-semiBold text ">
                  <span className="text-red-400 sf-mono about-text">I.</span>
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
                        Material UI and leaflet Created and implemented a custom
                        CSS grid system, with CSS media queries formobile
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
                  <span className="text-red-400 sf-mono about-text">II.</span>
                  Google Keep Clone using React JS, Firebase and Tailwind CSS
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
                  <span className="text-red-400 sf-mono about-text">III.</span>
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
                        UI,Taiwind CSS Created and implemented a custom CSS grid
                        system, with CSS media queries for mobile
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
    </div>
  );
}
