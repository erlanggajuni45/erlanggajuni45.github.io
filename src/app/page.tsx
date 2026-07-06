"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { profileData, skillsData, projectsData, Project } from "@/data/portfolio";

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
    // Sync dark mode state with document class
    const isDark = document.documentElement.classList.contains("dark");
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

      {/* Header/Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-100/50 dark:shadow-none border-b border-slate-100 dark:border-slate-800"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#home"
            className="font-bold text-2xl tracking-tight bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
          >
            Erlangga<span className="text-slate-800 dark:text-white">Juni</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-medium">
              {["home", "about", "portfolio", "skills"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`capitalize text-sm transition-colors relative py-1 ${
                      activeSection === section
                        ? "text-primary font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary"
                    }`}
                  >
                    {section === "portfolio" ? "Portfolio" : section}
                    {activeSection === section && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun Icon
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.8-6.4 4-6.4 7.7 0 4.4 3.6 8 8 8 3.7 0 6.9-2.6 7.7-6.4.1-.6.7-1 1.3-.9.6.1 1 .7.9 1.3-.9 4.6-5 8.1-9.9 8.1z" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.8-6.4 4-6.4 7.7 0 4.4 3.6 8 8 8 3.7 0 6.9-2.6 7.7-6.4.1-.6.7-1 1.3-.9.6.1 1 .7.9 1.3-.9 4.6-5 8.1-9.9 8.1z" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 flex flex-col gap-4 font-semibold">
            {["home", "about", "portfolio", "skills"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 capitalize transition-colors ${
                    activeSection === section
                      ? "text-primary"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {section === "portfolio" ? "Portfolio" : section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col - About description */}
            <div className="lg:col-span-7">
              <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Get closer...
              </h2>
              {profileData.aboutParagraphs.map((para, idx) => {
                // Parse markdown-like bold syntax: **Text**
                const parts = para.split(/\*\*([^*]+)\*\*/);
                return (
                  <p key={idx} className="text-lg text-slate-600 dark:text-slate-400 mb-5 leading-relaxed text-justify">
                    {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-slate-950 dark:text-white font-semibold">{part}</strong> : part))}
                  </p>
                );
              })}
            </div>

            {/* Right Col - Fast Stats & Socials */}
            <div className="lg:col-span-5 lg:pl-8">
              <div className="p-8 rounded-2xl glass-card border shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Quick Details & Socials
                </h3>
                
                {/* Stats list */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <span className="text-primary font-semibold w-24 flex-shrink-0">Location:</span>
                    <span className="text-slate-700 dark:text-slate-300">{profileData.location}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-semibold w-24 flex-shrink-0">Email:</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors underline break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-semibold w-24 flex-shrink-0">Experience:</span>
                    <span className="text-slate-700 dark:text-slate-300">Over 3 Years</span>
                  </div>
                </div>

                {/* Social icons */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">Connect With Me</h4>
                  <div className="flex items-center gap-3">
                    {/* LinkedIn */}
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                      title="LinkedIn"
                    >
                      <svg width="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                      title="GitHub"
                    >
                      <svg width="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href={profileData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                      title="Instagram"
                    >
                      <svg width="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href={profileData.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                      title="Facebook"
                    >
                      <svg width="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="container">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Selected Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A collection of enterprise-grade applications, internal tools, and scalable systems I&apos;ve engineered.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                    : "border-slate-200 dark:border-slate-800 hover:border-primary/50 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-950 rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Project Image Panel */}
                <div className="relative overflow-hidden aspect-video bg-slate-900 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800">
                  {/* Decorative background color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-cyan-500/10 opacity-30 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Image wrapper */}
                  <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain rounded-md shadow-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Project Content Panel */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-800">
                        {project.client}
                      </span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, idx_t) => (
                        <span
                          key={idx_t}
                          className="px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/5 rounded-full border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex">
                    <button
                      className="flex-1 text-center bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-slate-800 transition"
                      disabled
                    >
                      {project.type}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 rounded-full bg-primary hover:bg-primary/95 text-white shadow-lg items-center justify-center transition-all duration-300 hover:scale-105 ${
          showToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
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
