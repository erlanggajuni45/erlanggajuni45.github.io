export interface Project {
  title: string;
  client: string;
  tech: string[];
  description: string;
  image: string;
  type: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  aboutParagraphs: string[];
  cvUrl: string;
  email: string;
  location: string;
  socials: {
    linkedin: string;
    facebook: string;
    github: string;
    instagram: string;
  };
}

export const profileData: Profile = {
  name: "Erlangga Juni Saputra",
  title: "Full Stack Engineer",
  subTitle: "Specializing in Scalable Backend with Go & Modern Frontend",
  aboutParagraphs: [
    "I am a Full Stack Engineer with over 3 years of experience in building scalable and high-performance web applications. While I am proficient in the entire development lifecycle, my core strength lies in **Backend Engineering** using **Go (Golang)** and **Node.js**, as well as managing infrastructure with **Docker**.",
    "On the frontend, I craft responsive and interactive interfaces using **React** and **TypeScript**. I have a proven track record of delivering complex enterprise solutions—from IoT monitoring dashboards to secure financial transaction systems. I am dedicated to writing clean, maintainable code and optimizing system architecture for stability and speed."
  ],
  cvUrl: "https://bit.ly/erlangga_js_cv",
  email: "erlanggajunisaputra@gmail.com",
  location: "West Bandung, Indonesia",
  socials: {
    linkedin: "https://linkedin.com/in/erlangga-juni-saputra",
    facebook: "https://www.facebook.com/erlanggajuni.belekok",
    github: "https://github.com/erlanggajuni45",
    instagram: "https://instagram.com/erlanggajuni45",
  }
};

export const skillsData: Skill[] = [
  { name: "GoLang", icon: "/img/skill/golang.png" },
  { name: "React Js", icon: "/img/skill/react.png" },
  { name: "TypeScript", icon: "/img/skill/typescript.png" },
  { name: "Express Js", icon: "/img/skill/expressjs.png" },
  { name: "Tailwind CSS", icon: "/img/skill/tailwind_css.png" },
  { name: "Docker", icon: "/img/skill/docker.png" },
  { name: "Nginx", icon: "/img/skill/nginx.png" },
  { name: "PostgreSQL", icon: "/img/skill/postgresql.png" },
  { name: "MongoDB", icon: "/img/skill/mongodb.png" },
  { name: "Linux", icon: "/img/skill/linux.png" },
  { name: "Git", icon: "/img/skill/git.png" },
  { name: "jQuery", icon: "/img/skill/jquery.png" },
  { name: "Bootstrap", icon: "/img/skill/bootstrap.png" },
  { name: "Laravel", icon: "/img/skill/laravel.png" }
];

export const projectsData: Project[] = [
  {
    title: "Integrated Maintenance System (IMMS)",
    client: "PT Mitsubishi Motors",
    tech: ["Go", "SQL", "jQuery", "Windows Server"],
    description: "An enterprise-grade ERP system for digitizing maintenance workflows. I solved critical API bottlenecks by implementing a Service Decoupling strategy and breaking down the monolith into domain-specific services.",
    image: "/img/project/imms.png",
    type: "Private / Internal App"
  },
  {
    title: "RFID Logistics Tracking",
    client: "PT Pos Indonesia",
    tech: ["React.js", "Go", "Docker", "MongoDB", "WebSocket"],
    description: "High-performance logistics application handling massive RFID data streams. Built with Go Goroutines for non-blocking processing and WebSockets for real-time dashboard visualization across regional hubs.",
    image: "/img/project/pos.png",
    type: "Private / Internal App"
  },
  {
    title: "Enterprise E-Document & OCR",
    client: "PT Sharp Electronics",
    tech: ["Go", "jQuery", "Python", "MongoDB", "PostgreSQL"],
    description: "A digitization platform featuring a Hybrid Database (SQL + NoSQL) architecture. Engineered a seamless integration where Go orchestrates Python scripts for dynamic OCR-based signature placement.",
    image: "/img/project/edoc.png",
    type: "Private / Internal App"
  },
  {
    title: "Lippo Cikarang Wastewater Treatment Plant",
    client: "LippoLand",
    tech: ["Go", "React.js", "MongoDB", "WebSocket"],
    description: "Developed a comprehensive frontend for an IoT-driven web application designed to monitor wastewater tanks remotely. The solution empowers operators to prevent overflows through real-time data visualization and automated drainage controls.",
    image: "/img/project/lippo_wwtp.png",
    type: "Private / Internal App"
  },
  {
    title: "Corporate Security Simulation",
    client: "PT Futaba Industrial Indonesia",
    tech: ["Go", "Node.js", "Nginx", "PM2", "cPanel"],
    description: "A dual-app architecture (Express.js & Go) designed to simulate security attacks and audit employee awareness. Features custom telemetry tracking, email server blasting configuration, and comprehensive reporting.",
    image: "/img/project/phishing.png",
    type: "Private / Internal App"
  }
];
