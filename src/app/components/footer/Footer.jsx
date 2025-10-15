"use client";
import React from "react";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ankit-kumar-890890209/", icon: "/assets/social-media-icons/linkedin_icon.png" },
  { name: "GitHub", url: "https://github.com/ankit-j23", icon: "/assets/social-media-icons/github_icon.png" },
  { name: "Email", url: "mailto:ank558899@gmail.com", icon: "/assets/social-media-icons/instagram_icon.png" },
];

const Footer = () => {
  return (
    <footer className="w-full px-24 pb-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img className="size-8" src={link.icon}/>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
