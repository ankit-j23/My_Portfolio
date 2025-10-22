"use client";
import React from "react";
import { techStackData } from "@/data/techStackData";

const TechStack = () => {
    return (
        <section className="px-40">
            <div className="">
                <h2 className="text-3xl font-bold text-center mb-12">
                    My Tech Stack
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {techStackData.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md rounded-xl p-6 text-center"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {category.category}
                            </h3>
                            <ul className="space-y-2">
                                {category.techs.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="inline-block px-3 mr-2 py-1 bg-gray-100 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
