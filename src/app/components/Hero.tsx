import type { Profile } from "@/data/portfolio";
import Image from "next/image";


export default function Hero({ profileData }: { profileData: Profile }) {
    return (
        <section
            id="home"
            className="pt-32 pb-20 md:pt-44 md:pb-28 flex items-center min-h-[90vh]"
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Col - Introduction */}
                    <div className="lg:col-span-7 flex flex-col justify-center animate-first-show-intro">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">
                            Welcome to my digital space 👋
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                            Hi, I&apos;m <span className="text-primary">{profileData.name}</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-transparent mb-6">
                            {profileData.title}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
                            {profileData.subTitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={profileData.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                See My CV
                            </a>
                            <a
                                href="#about"
                                className="px-8 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-full transition-all duration-300"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Right Col - Avatar Picture */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end animate-first-show-picture">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                            {/* Outer Glow Effects */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-cyan-500 opacity-20 blur-3xl" />
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-cyan-400 opacity-20 animate-pulse duration-4000" />

                            {/* SVG blob background */}
                            <div className="absolute inset-0 -z-10 scale-110">
                                <svg className="w-full h-full fill-primary/10 dark:fill-primary/5" viewBox="0 0 200 200">
                                    <path
                                        d="M54.9,-63.2C67.5,-54.9,71.4,-34.1,74.8,-13.5C78.1,7.2,80.7,27.6,72.2,41C63.7,54.3,44,60.6,24.5,68C5,75.4,-14.4,84.1,-29,79C-43.6,74,-53.4,55.2,-60.6,37.5C-67.8,19.8,-72.5,3.1,-70.5,-13.2C-68.6,-29.5,-60,-45.4,-47.2,-53.7C-34.3,-62,-17.2,-62.5,2,-64.9C21.2,-67.3,42.3,-71.5,54.9,-63.2Z"
                                        transform="translate(100 100) scale(1)"
                                    />
                                </svg>
                            </div>

                            {/* Profile Image Wrapper */}
                            <div className="relative w-full h-full overflow-hidden rounded-full border-[6px] border-white dark:border-slate-900 shadow-2xl">
                                <Image
                                    src="/img/erlangga.png"
                                    alt={profileData.name}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 300px, 400px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}