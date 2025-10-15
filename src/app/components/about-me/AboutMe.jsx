"use client";
import React from "react";

const aboutMeData = {
    name: "Ankit Kumar",
    location: "Bengaluru, Karnataka",
    summary: `Full-Stack Web Developer with a strong foundation in MERN stack. Passionate about building production-ready applications with a focus on performance, scalability, and user experience. Adept at problem-solving and collaborating in fast-paced environments.`,
    education: [
        {
            degree: "B.Tech in Electronics and Communication Engineering",
            institute: "Bihar Engineering University",
            period: "Sep 2020 - Aug 2024",
            cgpa: "7.83 CGPA",
        },
    ],
    interests: [
        "Web Development",
        "Open Source Contributions",
        "UI/UX Design",
        "Learning New Technologies",
    ],
};

const AboutMeSection = () => {
    return (
        <section className="w-full px-24">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

            <div className="max-w-3xl mx-auto text-center mb-12">
                <p>{aboutMeData.summary}</p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                {aboutMeData.education.map((edu, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="text-gray-800 font-medium">{edu.degree}</p>
                        <p className="text-gray-600">{edu.institute}</p>
                        <p className="text-gray-600">
                            {edu.period} | {edu.cgpa}
                        </p>
                    </div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl font-semibold mb-4">Interests & Focus Areas</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                    {aboutMeData.interests.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
