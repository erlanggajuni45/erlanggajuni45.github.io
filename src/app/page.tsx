"use client";

import { useState, useEffect } from "react";
import { profileData, skillsData, projectsData, Project } from "@/data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "next/image";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

export default function Home() {
  // Navigation & Scroll states
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Project filtering state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load theme and listen to scroll
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    // Sync dark mode state with document class
    setIsDarkMode(isDark);

    const handleScroll = () => {
      // Toggle navbar border/shadow on scroll
      setIsScrolled(window.scrollY > 20);
      // Toggle back to top button visibility
      setShowToTop(window.scrollY > 500);

      // Section highlighting logic
      const sections = ["home", "about", "portfolio", "skills"];
      const scrollPosition = window.scrollY + 160; // offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Categories for portfolio filtering
  const categories = ["All", "Go", "React.js", "Docker", "WebSocket"];

  // Filtered projects
  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.tech.includes(selectedCategory));

  return (
    <div className="relative min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/5" />
      </div>

      {/* Header */}
      <Header
        isScrolled={isScrolled}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero Section */}
      <Hero profileData={profileData} />

      {/* About Section */}
      <About profileData={profileData} />

      {/* Portfolio Section */}
      <Portfolio
        categories={categories}
        filteredProjects={filteredProjects}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />


      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950 text-white relative overflow-hidden transition-all">
        {/* Glow decoration */}
        <div className="absolute -bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
              Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              My Tech Stack
            </h2>
            <p className="text-slate-400">
              The technologies and frameworks I leverage to engineer robust backend systems and interactive frontends.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-6 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-primary/30 rounded-2xl shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-950 text-white border-t border-slate-900 pt-20 pb-12 transition-all">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left side details */}
            <div className="flex flex-col">
              <h2 className="font-extrabold text-3xl mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent self-start">
                Erlangga Juni
              </h2>
              <p className="text-slate-400 max-w-sm mb-6">
                Thank you for visiting! Let&apos;s build something great together.
              </p>
              <h3 className="font-bold text-xl text-white mb-3">Contact Details</h3>
              <p className="text-slate-300 mb-1">{profileData.email}</p>
              <p className="text-slate-400">{profileData.location}</p>
            </div>

            {/* Right side navigation links */}
            <div className="flex flex-col md:items-end">
              <h3 className="font-bold text-xl text-white mb-6">Quick Links</h3>
              <ul className="space-y-4 md:text-right">
                {["home", "about", "portfolio", "skills"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-slate-400 hover:text-primary transition-colors capitalize text-base inline-block"
                    >
                      {link === "portfolio" ? "Portfolio" : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Socials & Copyright bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-800 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <svg width="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-800 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                title="GitHub"
              >
                <svg width="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-800 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                title="Instagram"
              >
                <svg width="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>

            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Erlangga Juni Saputra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <a
        href="#home"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 rounded-full bg-primary hover:bg-primary/95 text-white shadow-lg items-center justify-center transition-all duration-300 hover:scale-105 ${showToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </div>
  );
}
