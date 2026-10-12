export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  hasInteractiveDemo?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  duration: string;
  focus?: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: string;
}

export const PERSONAL_INFO = {
  name: "Samarth Birajdar",
  shortName: "SAMARTH BIRAJDAR.",
  title: "Software Engineer | Frontend Developer | AI Enthusiast",
  headline: "Building Digital Experiences That Matter.",
  bio: "I'm Samarth Birajdar, an aspiring software engineer passionate about building intuitive web applications, solving challenging problems, and creating impactful digital experiences using modern frontend technologies.",
  location: "India",
  email: "samarthbirajdar2201@gmail.com",
  github: "https://github.com/samarthbirajdar2201-blip",
  githubRepos: "https://github.com/samarthbirajdar2201-blip?tab=repositories",
  linkedin: "https://www.linkedin.com/in/samarthbirajdar01/",
  leetcode: "https://leetcode.com/u/Samarth5005/",
  targetRoles: [
    "Frontend Developer",
    "Software Development Engineer",
    "React.js Developer",
    "Full Stack Developer",
    "AI Software Engineer",
  ],
  coreStack: ["React.js", "Next.js", "TypeScript", "Python", "Node.js"],
};

export const ABOUT_DATA = {
  label: "ABOUT ME",
  heading: "Curious by Nature. Engineer by Mindset.",
  introParagraph1:
    "I'm an aspiring software engineer with a strong foundation in software development, Python, and Data Structures & Algorithms. I enjoy building practical applications, developing responsive user interfaces, and connecting frontend experiences with backend systems and APIs.",
  introParagraph2:
    "I'm continuously improving my skills in React.js, Next.js, TypeScript, backend development, and AI-powered applications. My goal is to build software that is useful, maintainable, and enjoyable to use.",
  pillars: [
    {
      number: "01",
      title: "Product-Focused Development",
      description:
        "Building useful applications with clean interfaces, intuitive interactions, and thoughtful user experiences that solve real problems.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description:
        "Strengthening algorithmic thinking, code optimization, and disciplined problem-solving through consistent coding practice and 175+ LeetCode challenges.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "Exploring modern web technologies, scalable backend architectures, and practical AI integrations including LLMs and RAG workflows.",
    },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "saveiq",
    title: "SaveIQ — Personal Finance & Budget Management",
    category: "Full Stack & Financial Engineering",
    tagline: "Personal finance intelligence with rule-based coaching",
    description:
      "A comprehensive personal finance dashboard designed to help users take control of their finances with income/expense tracking, budget limits, savings goals with milestone projections, and an interactive local AI Finance Coach.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Context API",
      "localStorage",
    ],
    features: [
      "Responsive financial overview with real-time balance and savings rate calculation",
      "Interactive expense breakdown and monthly cash flow charts using Recharts",
      "Transaction management with instant search, category filters, and expense tagging",
      "Dynamic savings goals with timeline forecasts, milestones, and target calculations",
      "Category-specific budget thresholds with live visual progress bars",
      "Rule-based AI Finance Coach offering instant queries on balances, savings, and budgets",
      "Persistent client-side storage via localStorage with export and reset support",
    ],
    githubUrl: "https://github.com/samarthbirajdar2201-blip/SaveIQ",
    featured: true,
    hasInteractiveDemo: true,
  },
  {
    id: "attendance-tracking",
    title: "Attendance & Location Tracking System",
    category: "Enterprise Web Systems",
    tagline: "GPS-verified employee work-hour and attendance platform",
    description:
      "A reliable web application for employee attendance management, work-hour auditing, task scheduling, and GPS-based check-in/check-out with role-based access control.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "MySQL",
      "GPS Location Services",
    ],
    features: [
      "GPS-based geo-fenced check-in and check-out verification",
      "Automated work-hour calculation and daily attendance audit trails",
      "Dual-portal architecture: Employee self-service and Administrator management",
      "Role-based access control (RBAC) securing confidential staff profiles",
      "Interactive attendance statistics and departmental compliance dashboards",
      "RESTful API integration connecting React frontend with a relational MySQL database",
    ],
    featured: true,
    hasInteractiveDemo: true,
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & ATS Score Evaluator",
    category: "AI & Natural Language Processing",
    tagline: "Intelligent ATS compatibility scoring and resume feedback",
    description:
      "An intelligent platform evaluating resume relevance against targeted job descriptions, computing algorithmic ATS compatibility scores, extracting key missing competencies, and generating structured feedback.",
    technologies: [
      "React.js",
      "Python",
      "FastAPI",
      "LLM Workflows",
      "Tailwind CSS",
      "REST APIs",
    ],
    features: [
      "Document parsing with section extraction for skills, work history, and education",
      "Algorithmic keyword matching and semantic relevance scoring",
      "Structured ATS readability score with actionable improvement recommendations",
      "Instant role-specific keyword suggestions tailored for software engineering positions",
    ],
    featured: false,
    hasInteractiveDemo: true,
  },
  {
    id: "leetcode-solutions",
    title: "LeetCode Algorithmic Solutions Repository",
    category: "Algorithms & Data Structures",
    tagline: "175+ solved algorithmic challenges with optimal time/space complexity",
    description:
      "Structured repository containing well-documented solutions to 175+ LeetCode problems in Python, focusing on fundamental patterns: two pointers, binary search, tree traversals, dynamic programming, and graphs.",
    technologies: ["Python", "Algorithms", "Data Structures", "LeetCode"],
    features: [
      "Categorized by core algorithmic paradigms (Arrays, Trees, Graphs, DP)",
      "Detailed time and space complexity annotations for every solution",
      "Edge-case testing and optimal algorithmic approach documentation",
      "Tracks consistency earning the prestigious LeetCode 50-Day Badge",
    ],
    githubUrl: "https://github.com/samarthbirajdar2201-blip/Leetcode",
    featured: false,
  },
  {
    id: "a2z-dsa",
    title: "Striver's A2Z DSA Implementation & Reference Notes",
    category: "Algorithms & Engineering Notes",
    tagline: "End-to-end DSA implementations and concept summaries",
    description:
      "Systematic study guide and code implementation repository covering comprehensive Data Structures & Algorithms concepts from basics to advanced graph theory and bit manipulation.",
    technologies: ["Python", "DSA", "Problem Solving", "Markdown"],
    features: [
      "Comprehensive implementations of classic data structures from scratch",
      "In-depth concept summaries, recurrence relation derivations, and cheat sheets",
      "Step-by-step intuition notes for complex graph and tree interview problems",
    ],
    githubUrl: "https://github.com/samarthbirajdar2201-blip/A2Z-DSA-Code-and-Notes",
    featured: false,
  },
];

export const SKILLS_DATA = {
  categories: [
    {
      name: "Programming Languages",
      description: "Core languages used for problem solving and software systems",
      skills: [
        { name: "Python", highlight: true, note: "Primary language for DSA, scripts & AI" },
        { name: "JavaScript", highlight: true, note: "Modern ES6+, async programming & web APIs" },
      ],
    },
    {
      name: "Frontend Development",
      description: "Building responsive, modern, performant user interfaces",
      skills: [
        { name: "React.js", highlight: true, prominent: true, note: "Hooks, Context, Component Design" },
        { name: "Next.js", highlight: true, prominent: true, note: "App Router, SSR, Modern Web" },
        { name: "TypeScript", highlight: true, prominent: true, note: "Type-safety, Interfaces, Generics" },
        { name: "Tailwind CSS", highlight: true, note: "Responsive design & utility layouts" },
        { name: "HTML5 & CSS3", highlight: false, note: "Semantic structure & accessibility" },
      ],
    },
    {
      name: "Backend Development",
      description: "Server architecture, API design, and backend business logic",
      skills: [
        { name: "Node.js", highlight: true, note: "Server runtime & event loop" },
        { name: "Express.js", highlight: false, note: "Lightweight web APIs" },
        { name: "FastAPI", highlight: true, note: "High performance Python REST APIs" },
        { name: "Flask", highlight: false, note: "Python microservices & prototypes" },
        { name: "REST APIs", highlight: true, note: "Endpoint architecture & HTTP contracts" },
      ],
    },
    {
      name: "Databases",
      description: "Data modeling, relational schemas, and query optimization",
      skills: [
        { name: "SQL", highlight: true, note: "Structured queries, joins, indexes" },
        { name: "MySQL", highlight: true, note: "Relational database management" },
        { name: "DBMS", highlight: false, note: "ACID properties, schema design" },
      ],
    },
    {
      name: "AI & Machine Learning",
      description: "Applied generative AI, LLM prompting, and retrieval systems",
      skills: [
        { name: "Large Language Models (LLMs)", highlight: true, prominent: true, note: "Model evaluation & prompt flows" },
        { name: "RAG Systems", highlight: true, note: "Retrieval-Augmented Generation basics" },
      ],
    },
    {
      name: "Tools & Platforms",
      description: "Developer tooling, cloud basics, and workflow automation",
      skills: [
        { name: "Git", highlight: true, note: "Version control & collaboration" },
        { name: "GitHub", highlight: true, note: "Code hosting & CI workflows" },
        { name: "VS Code", highlight: false, note: "Primary IDE & dev tooling" },
        { name: "AWS", highlight: false, note: "Cloud essentials" },
        { name: "Jupyter Notebook", highlight: false, note: "Data analysis & prototyping" },
      ],
    },
  ],
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Technical Intern",
    organization: "STQC — Government of India",
    location: "Bengaluru, India",
    duration: "October 2026 – Present",
    isCurrent: true,
    responsibilities: [
      "Supporting technical operations and assigned engineering tasks.",
      "Contributing to technical deliverables under guidance.",
      "Following technical guidelines and professional standards.",
      "Working within established confidentiality protocols.",
    ],
  },
  {
    role: "AI Engineer Intern",
    organization: "iKawn Inc.",
    focus: "AI Model Integration, Prototyping, and Model Evaluation",
    duration: "September 2026 – November 2026",
    isCurrent: false,
    responsibilities: [
      "Contributing to an AI-powered virtual try-on product.",
      "Supporting AI model research, integration, and evaluation.",
      "Working on prototyping and experimentation.",
      "Supporting technical documentation and product functionality.",
    ],
  },
];

export const EDUCATION_DATA = {
  college: "SVERI's College of Engineering, Pandharpur",
  degree: "B.Tech in Electronics and Telecommunication Engineering",
  duration: "2023–2027",
  status: "Undergraduate Student",
};

export const ACHIEVEMENTS_DATA = {
  leetcode: {
    handle: "Samarth5005",
    problemsSolved: "175+",
    badge: "50-Day LeetCode Badge",
    url: "https://leetcode.com/u/Samarth5005/",
    description: "Consistent problem-solving across Arrays, Two Pointers, Sliding Window, Trees, and DP.",
  },
  certifications: [
    {
      title: "Python Programming",
      issuer: "GeeksforGeeks",
      type: "Programming Language",
    },
    {
      title: "Data Structures & Algorithms in Python",
      issuer: "Infosys",
      type: "Algorithms & Data Structures",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      type: "Frontend & Web Architecture",
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      type: "Database Management & Queries",
    },
  ],
};

export const GITHUB_REPOSITORIES = [
  {
    name: "SaveIQ",
    description: "Personal finance and budget dashboard with rule-based AI coach, expense tracking, and goal forecasts.",
    language: "TypeScript / React",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/SaveIQ",
    updated: "Active",
    isFeatured: true,
  },
  {
    name: "Leetcode",
    description: "Python solutions for 175+ algorithmic LeetCode challenges with complexity analyses.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/Leetcode",
    updated: "Active",
    isFeatured: false,
  },
  {
    name: "A2Z-DSA-Code-and-Notes",
    description: "Striver's A2Z DSA sheet problem implementations, notes, and algorithmic cheat sheets.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/A2Z-DSA-Code-and-Notes",
    updated: "Active",
    isFeatured: false,
  },
  {
    name: "neetcode-submissions",
    description: "NeetCode roadmap problem practice repository covering blind 75 patterns.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/neetcode-submissions",
    updated: "Active",
    isFeatured: false,
  },
  {
    name: "DSA",
    description: "Foundational data structures and algorithms implementations and exercises.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/DSA",
    updated: "Active",
    isFeatured: false,
  },
  {
    name: "Python-Notes-Topic-Wise",
    description: "Structured Python reference notes covering language internals, OOP, and standard libraries.",
    language: "Markdown / Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/samarthbirajdar2201-blip/Python-Notes-Topic-Wise",
    updated: "Active",
    isFeatured: false,
  },
];
