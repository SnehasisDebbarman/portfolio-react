import React from "react";
import Axios from "../logos/axiosColor.svg";
import Firebase from "../logos/firebase.svg";
import ReactI from "../logos/reactColor.svg";
import Tailwind from "../logos/tailsvg.svg";

export default function TailwindCard({ project }) {
  function toolIcon(tool) {
    switch (tool) {
      case "React":
        return ReactI;
      case "Firebase":
        return Firebase;
      case "Tailwind":
        return Tailwind;
      case "Axios":
        return Axios;
      default:
        break;
    }
  }
  return (
    <div className="flex flex-col  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-[60vh] md:min-h-[57vh] lg:min-h-[60vh] hover:scale-105 transition duration-500 ease-in-out">
      <a href="about">
        <img className="rounded-t-lg" src={project.image} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 md:text-base font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis break-words">
          {project.title}
        </h5>

        <p className="mb-3 md:text-xs font-normal text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
        <a
          href={project.link}
          className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-red-300 "
        >
          Link
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class="px-6 pt-4 pb-2">
        {project.tools.map((tool) => (
          <span class="inline-block w-10 md:w-7 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
            <img src={toolIcon(tool)} alt="icons" />
          </span>
        ))}
      </div>
    </div>
  );
}
