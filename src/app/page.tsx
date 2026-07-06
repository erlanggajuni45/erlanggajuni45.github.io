"use client";

import { useState, useEffect } from "react";
import { profileData, skillsData, projectsData, certificatesData } from "@/data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

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
    // Sync dark mode state with document class asynchronously to prevent cascading renders
    const timer = setTimeout(() => {
      setIsDarkMode(isDark);
    }, 0);

    const handleScroll = () => {
      // Toggle navbar border/shadow on scroll
      setIsScrolled(window.scrollY > 20);
      // Toggle back to top button visibility
      setShowToTop(window.scrollY > 500);

      // Section highlighting logic
      const sections = ["home", "about", "portfolio", "skills", "certificates"];
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
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
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
  const categories = ["All", "Go", "React.js", "Python", "Docker", "WebSocket"];

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
      <Skills skillsData={skillsData} />

      {/* Certificates Section */}
      <Certificates certificatesData={certificatesData} linkedinUrl={profileData.socials.linkedin} />

      {/* Footer Section */}
      <Footer profileData={profileData} />

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
