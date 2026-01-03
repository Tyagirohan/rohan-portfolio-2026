export const personalInfo = {
  name: "Rohan Tyagi",
  title: "R&D Engineer",
  company: "Synopsys Inc",
  email: "tyagirohan.142@gmail.com",
  phone: "+91 7533804014",
  location: "Noida, India",
  links: {
    github: "https://github.com/Tyagirohan",
    linkedin: "https://linkedin.com/in/rohan-tyagi-333675202",
    portfolio: "https://rohanportfolio2026.vercel.app"
  },
  summary: "R&D Engineer at Synopsys specializing in performance-oriented systems development with C++ and Python. Strong in Data Structures & Algorithms (solved 500+ problems across platforms), complexity analysis, and system-level design. Delivered measurable impact: 20% speedups, 40% crash reduction, and 10% fewer non-deterministic failures in production workflows.",
  about: "I'm a passionate software engineer with a deep love for optimizing systems and solving complex algorithmic challenges. My journey from being a Gold Medalist at ABES Engineering College to working on cutting-edge EDA tools at Synopsys has been driven by curiosity and a commitment to excellence. I thrive in performance-critical environments where every millisecond counts, and I believe that elegant code is the intersection of efficiency and clarity. Beyond coding, I'm constantly exploring new technologies, contributing to open-source projects, and sharing knowledge through my DSA repositories that help fellow developers master problem-solving patterns."
};

export const experience = [
  {
    id: 1,
    role: "Research & Development Engineer",
    company: "Synopsys Inc",
    location: "Noida, India",
    period: "Jul 2024 – Present",
    description: "Led C++/Python development for advanced synthesis tools (Design Compiler, Fusion Compiler) in performance-critical EDA workflows.",
    achievements: [
      "Achieved 20% runtime speedup and 40% crash rate reduction by refactoring core simulation modules",
      "Reduced non-deterministic failures by 10% through deterministic event-driven design improvements",
      "Built diagnostic utilities for memory profiling and regression auto-analysis; cut MTTR by 30%",
      "Enhanced QoR reporting infrastructure with custom 3D visualization for large-scale design analysis"
    ],
    metrics: {
      speedup: 20,
      crashReduction: 40,
      mttrReduction: 30,
      failureReduction: 10
    }
  },
  {
    id: 2,
    role: "Graduate Engineer",
    company: "Synopsys Inc",
    location: "Noida, India",
    period: "Aug 2023 – Jul 2024",
    description: "Developed comprehensive QoR visualization and analysis tools.",
    achievements: [
      "Developed 3DQoR (Python, Plotly) for comprehensive QoR visualization and analysis"
    ]
  }
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "ABES Engineering College",
  gpa: "8.81/10",
  period: "2020 – 2024",
  achievement: "Gold Medalist CSE ABESEC'24"
};

export const skills = {
  languages: [
    { name: "C++", level: 95, category: "primary" },
    { name: "Python", level: 95, category: "primary" },
    { name: "C", level: 95, category: "primary" },
    { name: "TCL/Tk", level: 90, category: "secondary" },
    { name: "SQL", level: 90, category: "secondary" },
    { name: "Bash/Shell", level: 90, category: "secondary" }
  ],
  csda: [
    { name: "Graphs", level: 95 },
    { name: "Dynamic Programming", level: 95 },
    { name: "Trees", level: 95 },
    { name: "Greedy Algorithms", level: 95 },
    { name: "STL", level: 95 },
    { name: "OOP", level: 95 },
    { name: "Complexity Analysis", level: 95 },
    { name: "Design Patterns", level: 90 }
  ],
  systems: [
    { name: "Performance Optimization", level: 95 },
    { name: "Profiling (gdb/valgrind)", level: 95 },
    { name: "Memory Management", level: 95 },
    { name: "Debugging", level: 95 },
    { name: "Concurrency", level: 90 }
  ],
  aitools: [
    { name: "GitHub Copilot", level: 95 },
    { name: "Cursor AI", level: 95 },
    { name: "ChatGPT/Claude", level: 95 },
    { name: "GitHub Actions", level: 90 },
    { name: "VS Code Extensions", level: 90 }
  ],
  eda: [
    "Logic Synthesis", 
    "Design Compiler", 
    "Fusion Compiler", 
    "QoR Reporting", 
    "Runtime Debugging",
    "Timing Analysis",
    "Static Timing Analysis (STA)",
    "Power Analysis",
    "Place & Route"
  ],
  tools: [
    "Linux/UNIX", 
    "Git", 
    "Perforce", 
    "CMake", 
    "VS Code", 
    "Jira",
    "Docker",
    "CI/CD"
  ],
  other: [
    "Agile/Scrum",
    "Technical Writing",
    "Problem Solving",
    "Team Collaboration"
  ]
};

export const projects = [
  {
    id: 1,
    title: "AgriChain",
    description: "A complete agricultural ecosystem platform combining AI disease detection, blockchain supply chain tracking, government schemes integration, and direct farmer-to-consumer marketplace.",
    tags: ["Blockchain", "AI", "React", "Node.js", "Smart Contracts", "Computer Vision"],
    image: "/images/agrichain.png",
    links: {
      demo: "https://agrichainfrontend.vercel.app/",
      github: "https://github.com/Tyagirohan/agrichain",
      frontend: "https://github.com/Tyagirohan/agrichainfrontend"
    },
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Yoga Sync",
    description: "Real-time posture recognition using OpenCV, TensorFlow, PoseNet; instant feedback via keypoint detection.",
    tags: ["OpenCV", "TensorFlow", "PoseNet", "Computer Vision", "Real-time"],
    image: "/images/yoga_sync.png",
    links: {
      demo: "https://tyagirohan.github.io/yoga-sync/",
      github: "https://github.com/Tyagirohan/yoga-sync"
    },
    featured: true,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "LeetCode Patterns",
    description: "Comprehensive collection of LeetCode problem-solving patterns and techniques, organized by pattern type with detailed explanations and solutions.",
    tags: ["DSA", "Algorithms", "Problem Solving", "Patterns"],
    links: {
      github: "https://github.com/Tyagirohan/LeetCode-Patterns"
    },
    category: "DSA"
  },
  {
    id: 4,
    title: "Algorithms in Action",
    description: "Visual and interactive implementations of classic algorithms with step-by-step explanations and complexity analysis.",
    tags: ["Algorithms", "Data Structures", "Visualization", "Education"],
    links: {
      github: "https://github.com/Tyagirohan/Algorithms-in-Action"
    },
    category: "DSA"
  },
  {
    id: 5,
    title: "Real-World Applications",
    description: "Collection of DSA concepts applied to real-world problems, bridging theory and practical implementation.",
    tags: ["DSA", "Applications", "Problem Solving"],
    links: {
      github: "https://github.com/Tyagirohan/Real-World-Applications"
    },
    category: "DSA"
  },
  {
    id: 6,
    title: "Build with DSA",
    description: "Projects and applications built entirely using data structures and algorithms, showcasing practical DSA usage in development.",
    tags: ["DSA", "Projects", "Development"],
    links: {
      github: "https://github.com/Tyagirohan/build-with-dsa"
    },
    category: "DSA"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Programming Essentials in Python",
    issuer: "CISCO",
    category: "Programming"
  },
  {
    id: 2,
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Networking Essentials",
    issuer: "CISCO",
    category: "Networking"
  },
  {
    id: 4,
    title: "Developing Soft Skills and Personality",
    issuer: "NPTEL",
    category: "Soft Skills"
  }
];

export const publications = [
  {
    id: 1,
    title: "Technological Insights into Yoga Posture Recognition: A State-of-the-Art Review",
    link: "https://ieeexplore.ieee.org/document/10441501",
    venue: "IEEE Xplore"
  },
  {
    id: 2,
    title: "Disease Prediction in Plants: using new Era Technologies",
    link: "https://ieeexplore.ieee.org/document/10441424",
    venue: "IEEE Xplore"
  },
  {
    id: 3,
    title: "Mental Component Study to Ensure Sustainable Health Through Quality of Life of Participants in Challenging Situations of the 21st Century",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003568308-5/mental-component-study-ensure-sustainable-health-quality-life-participants-challenging-situations-21st-century-rohit-rastogi-tribhuvan-mishra-vaishnavi-mishra-saransh-chauhan-rohan-tyagi-utkarsh-pratap-shahi",
    venue: "Taylor & Francis (2025)"
  },
  {
    id: 4,
    title: "Examining the AQI with Effect of Agnihotra in NCR Region: Extracting Knowledge for Sustainable Society and Holistic Development with Healthcare 5.0",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-6068-0_27",
    venue: "Springer (2023)"
  },
  {
    id: 5,
    title: "Analysis of PCS-QoL to investigate the holistic health for sustainable way of living in smart cities of 21st century",
    link: "https://www.inderscienceonline.com/doi/abs/10.1504/IJDATS.2023.132565",
    venue: "Inderscience - IJDATS (2023)"
  },
  {
    id: 6,
    title: "Air quality data interpreting in Delhi, NCR region and effect of Agnihotra on it: extracting knowledge for sustainable society and holistic development",
    link: "https://www.inderscienceonline.com/doi/abs/10.1504/IJBHR.2022.127114",
    venue: "Inderscience - IJBHR (2022)"
  }
];

export const achievements = [
  "Gold Medalist CSE ABESEC'24",
  "500+ DSA Problems Solved across platforms",
  "20% Runtime Performance Improvement at Synopsys",
  "40% Crash Rate Reduction in Production",
  "30% MTTR Reduction through Diagnostic Tools"
];
