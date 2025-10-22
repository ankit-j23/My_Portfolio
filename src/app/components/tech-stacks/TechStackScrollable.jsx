"use client";
import React from "react";

// Example tech stack array
const techStacks = [
  { name: "React", src: "/assets/tech-stack-icons/ReactJS.png" },
  { name: "Next.js", src: "/assets/tech-stack-icons/NextJS.png" },
  { name: "Node.js", src: "/assets/tech-stack-icons/NodeJS.png" },
  { name: "Tailwind", src: "/assets/tech-stack-icons/Tailwind.png" },
  { name: "MySQL", src: "/assets/tech-stack-icons/MySQL.png" },
  { name: "Express", src: "/assets/tech-stack-icons/ExpressJS.png" },
  { name: "TypeScript", src: "/assets/tech-stack-icons/TypeScript.png" },
];

const TechStackScrollable = () => {
  return (
    <div className="overflow-hidden w-[80%] mx-auto">
      <div className="flex animate-marquee gap-6">
        {techStacks.concat(techStacks).map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg p-4"
            style={{ minWidth: "120px", maxHeight: "200px" }}
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <span className="text-sm font-medium text-gray-800">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechStackScrollable;
