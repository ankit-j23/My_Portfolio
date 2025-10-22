"use client";
import React from "react";
import { aboutMeData } from "@/data/aboutMeData";

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
