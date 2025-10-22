"use client";
import React from "react";
import { whatIBring } from "@/data/whatIbringData";

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
