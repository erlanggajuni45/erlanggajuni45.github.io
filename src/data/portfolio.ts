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

export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  logoUrl?: string;
}

export const profileData: Profile = {
  name: "Erlangga Juni Saputra",
  title: "Full Stack Engineer",
  subTitle: "Specializing in Scalable Backend with Go & Modern Frontend. Over 3 years of experience building high-performance web applications, IoT monitoring systems, and secure document workflows.",
  aboutParagraphs: [
    "I am a **Full Stack Engineer** entering my **4th year** of professional experience in designing, building, and optimizing scalable web applications. While I am proficient across the entire development lifecycle, my core strength lies in **Backend Engineering** using **Go (Golang)** and **Node.js**, alongside robust infrastructure management with **Docker** and Linux server administration.",
    "On the frontend, I craft highly responsive and interactive user interfaces using **React**, **TypeScript**, and modern design systems. My experience spans building enterprise-grade applications for major corporations like **PT Sharp Electronics Indonesia**, **PT Pos Indonesia**, and **PT Mitsubishi Motors**—ranging from high-traffic concurrent logistics systems to real-time IoT monitoring dashboards.",
    "I am currently pursuing a **Bachelor's degree in Computer Science (S1 Informatika)** at **Telkom University** (having completed semester 5). To stay efficient and deliver high-quality clean code rapidly, I actively leverage AI-assisted tools like **GitHub Copilot** and **Gemini** to optimize my daily engineering workflows."
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
  { name: "Python", icon: "/img/skill/python.svg" },
  { name: "Express Js", icon: "/img/skill/expressjs.png" },
  { name: "Tailwind CSS", icon: "/img/skill/tailwind_css.png" },
  { name: "Docker", icon: "/img/skill/docker.png" },
  { name: "Kubernetes", icon: "/img/skill/kubernetes.svg" },
  { name: "Redis", icon: "/img/skill/redis.svg" },
  { name: "RabbitMQ", icon: "/img/skill/rabbitmq.svg" },
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
    title: "Integrated Maintenance Management System",
    client: "PT Mitsubishi Motors",
    tech: ["Go", "Windows Service", "Docker", "PLSQL"],
    description: "Monolith system decoupling for PT Mitsubishi Motors Krama Yudha Indonesia (MMKI) to resolve high-load latency. Decoupled the monorepo into 5 domain services and created a Go-based background task worker running as a Windows Service.",
    image: "/img/project/imms.png",
    type: "Private / Internal App"
  },
  {
    title: "Receiving Management System",
    client: "PT Pos Indonesia",
    tech: ["React.js", "Go", "Docker", "MongoDB", "WebSocket", "RFID"],
    description: "High-performance logistics management system for tracking parcel sorting. Leveraged Go Goroutines to process massive real-time RFID scanning streams and used WebSockets to supply real-time dashboard state updates.",
    image: "/img/project/pos.png",
    type: "Private / Internal App"
  },
  {
    title: "E-Document & Workflow System",
    client: "PT Sharp Electronics",
    tech: ["Go", "Python", "MongoDB", "PostgreSQL", "Nginx", "Docker"],
    description: "Developed and enhanced an enterprise e-document platform. Digitized physical paper trails by integrating Go with Python OCR scripts for coordinate-based digital signing, and implemented automated keyword-based validations, verifier workflow roles, and digital stamps.",
    image: "/img/project/edoc.png",
    type: "Private / Internal App"
  },
  {
    title: "Lippo Cikarang Wastewater Treatment Plant",
    client: "Lippoland",
    tech: ["React.js", "Go", "WebSocket", "MongoDB", "Tailwind CSS"],
    description: "Built a reactive web frontend from scratch for a wastewater tank remote monitoring system. Features animated tank visualizations representing real-time sensor streams, OpenStreetMap integration, and historical analytics charts.",
    image: "/img/project/lippo_wwtp.png",
    type: "Private / Internal App"
  },
  {
    title: "Corporate Phishing Simulation & Security Awareness Platform",
    client: "PT Futaba Industrial",
    tech: ["Node.js", "Go", "Nginx", "PM2", "cPanel"],
    description: "Developed a periodic phishing simulation platform. Designed a dual-app architecture: a bait app in Express.js/EJS to capture user interactions and a Go dashboard for real-time audit reports and user telemetry analysis.",
    image: "/img/project/phishing.png",
    type: "Private / Internal App"
  },
  {
    title: "Integrated Maintenance System",
    client: "PT Printechnindo Raya Utama",
    tech: ["Go", "Docker", "WebSocket", "Nginx"],
    description: "Developed a specialized equipment maintenance management platform for coding and marking equipment distributors. Designed the backend as a decoupled microservices architecture with Go, integrated real-time technician chat via WebSockets, and containerized domain services using Docker.",
    image: "/img/project/ims.png",
    type: "Private / Internal App"
  }
];

export const certificatesData: Certificate[] = [
  {
    title: "Menjadi Back-End Developer Expert dengan JavaScript",
    issuer: "Dicoding Indonesia",
    issueDate: "2023",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ02QG43X65",
  },
  {
    title: "Belajar Membangun Arsitektur Microservices",
    issuer: "Dicoding Indonesia",
    issueDate: "2026",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1VJR75Z72",
  },
  {
    title: "Menjadi React Web Developer Expert",
    issuer: "Dicoding Indonesia",
    issueDate: "2026",
    credentialUrl: "https://www.dicoding.com/certificates/6RPN750G4X2M",
  }
];
