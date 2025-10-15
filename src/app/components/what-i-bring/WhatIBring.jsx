"use client";
import React from "react";

const whatIBring = [
  {
    title: "Full-Stack Expertise",
    description:
      "Hands-on experience building production-ready web applications using MERN stack with secure authentication and REST API integration.",
    icon: "💻",
  },
  {
    title: "Responsive & User-Centered UI",
    description:
      "Designing clean, intuitive, and responsive frontends using React.js, Next.js, and Tailwind CSS, ensuring excellent user experience across devices.",
    icon: "🎨",
  },
  {
    title: "State Management & Optimization",
    description:
      "Skilled in Redux Toolkit, Context API, and React Query to manage complex state efficiently and optimize performance.",
    icon: "⚡",
  },
  {
    title: "Collaboration & Agile Delivery",
    description:
      "Adapt quickly to changing requirements in fast-paced environments; experience working with Git/GitHub, code reviews, and deploying applications on Vercel, Netlify, and Render.",
    icon: "🤝",
  },
  {
    title: "Problem-Solving & Scalability",
    description:
      "Strong background in building scalable, maintainable codebases and tackling challenging problems in full-stack development.",
    icon: "🛠️",
  },
  {
    title: "Project Delivery & Impact",
    description:
      "Delivered multiple production-grade applications impacting thousands of users, implementing reusable components, performance optimizations, and clean, maintainable code.",
    icon: "🚀",
  },
];

const WhatIBring = () => {
  return (
    <section className="w-full px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        What I Bring
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {whatIBring.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIBring;
