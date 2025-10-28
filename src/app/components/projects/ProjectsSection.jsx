"use client";
import React from "react";
import { projectsData } from "@/data/mockProjectData";

const ProjectsSection = () => {
  return (
    <section className="w-full px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="flex flex-col gap-16 px-6 md:px-16">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 shadow-sm p-3 rounded-md bg-white`}
          >
            <div className="max-w-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-md shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-black/80 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center flex-wrap gap-3 mt-2">
                <span className="text-sm font-bold">Tech Used :</span>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-black/80 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 border rounded-lg transition-colors`}
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2 border rounded-lg transition-colors ${project.title === 'ZookOut Coupon App' ? "hidden" : ""}`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
