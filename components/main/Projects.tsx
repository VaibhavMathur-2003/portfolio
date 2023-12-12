import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold  py-10 text-white">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 text-center">
        <ProjectCard
          src="/algoviz.png"
          title="Algo Visualizer"
          description="• React-based algorithm visualizer showcasing various algorithms like searching, sorting, path-finding, etc.
          • Implemented various algorithms, such as selection sort, binary search, and BFS, using React.
          • Includes AI Algorithms like A* which takes 6X less time than Dijkstra."
        />
        <ProjectCard
          src="/quickconvo.png"
          title="Full Stack Chat App"
          description="• Developed a MERN stack chat application with real-time chat and secure login for 5+ users.
          • Created interactive UI with React, achieved real-time messaging using Socket.io, and ensured security using encryption.
          • Utilized React, Socket.io for messaging, scripts, and Node.js, Express, and MongoDB for backend and data handling.."
        />
        <ProjectCard
          src="/algoviz.png"
          title="Space Themed Website"
          description="• React-based algorithm visualizer showcasing various algorithms like searching, sorting, path-finding, etc.
          • Implemented various algorithms, such as selection sort, binary search, and BFS, using React.
          • Includes AI Algorithms like A* which takes 6X less time than Dijkstra."
        />
      </div>
    </div>
  );
};

export default Projects;
