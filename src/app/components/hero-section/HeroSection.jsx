import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex gap-4 py-6 px-40">
            <div className="flex flex-col gap-10 w-[70%] left-section">
                <div className="flex flex-col gap-4 title-subtitle">
                    <h1 className="text-6xl font-semibold leading-[1.2]">
                        I'm Ankit, a Full-Stack Web Developer.
                    </h1>
                    <p className="text-xl max-w-[65ch] text-black/60">
                        Full-Stack Developer specializing in building responsive,
                        high-performance web apps using React.js, Next.js, and Node.js.
                        Passionate about clean architecture, intuitive UI, and seamless user
                        experiences.
                    </p>
                </div>
                <div className="flex gap-4 items-center cto-button">
                    <button
                        className="min-w-[200px]  bg-gradient-to-r from-zinc-800 to-zinc-900 
                                text-white hover:from-zinc-700 hover:to-zinc-800 shadow-xl py-2 border rounded-sm cursor-pointer"
                    >
                        View My Projects
                    </button>
                    <button className="min-w-[200px] shadow-xl py-2 border rounded-sm cursor-pointer">
                        Download Resume
                    </button>
                </div>
                <div className="social-proof -mt-3">
                    <p className="text-lg">
                        Contributed to production-grade apps serving <span>10,000+</span>{" "}
                        users
                    </p>
                    <p className="text-lg">
                        Deployed 5+ full-stack projects with real users on Vercel & Render.
                    </p>
                </div>
            </div>
            <div className="relative w-full md:w-[30%] flex justify-center items-center mt-16 md:mt-0">
                <div className="">
                    <Image
                        src="/assets/profile.png"
                        alt="Ankit Kumar"
                        width={350}
                        height={350}
                        className="rounded-full border-4 border-white shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
