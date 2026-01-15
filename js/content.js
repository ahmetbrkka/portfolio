const content = {
  hero: {
    name: "Ahmet Burak Kara",
    statement: "Engineer & Designer"
  },

  work: [
    {
      title: "Distributed Computation on GPUs",
      version: "v1.0",
      period: "2024–2025",
      metadata: "TUSAŞ LiftUp | Supported by TÜBİTAK 2209-B",
      stack: ["C/C++", "Python", "YOLOv8", "TCP"],
      description: "Developed distributed training infrastructure enabling heterogeneous GPU nodes at TUSAŞ to collaboratively train deep learning models over custom TCP-based communication layer. Reverse-engineered YOLOv8 training pipeline, designed socket-based protocol for parameter exchange. Implemented CPU/GPU benchmarking, hardware-eligibility checks, dynamic workload scheduling, GPU-accelerated parameter aggregation. Achieved 73% convergence toward ideal training time.",
      publications: [
        {
          title: "BSc Graduation Thesis",
          url: "assets/distributed-computing-thesis.pdf"
        },
        {
          title: "TUSAŞ Conference Paper",
          url: "assets/distributed-computing-tusas-paper.pdf"
        }
      ]
    },
    {
      title: "École 42 Piscine & Core Program",
      version: null,
      period: "2023–2024",
      metadata: "École 42 Istanbul",
      stack: ["C/C++", "Shell", "Algorithms"],
      description: "Selected for intensive Piscine program. Completed 1-month peer-to-peer, project-driven training. Implemented core standard library functions from scratch. Advanced to main curriculum after ranking high enough. Developed low-level memory manipulation algorithms.",
      publications: []
    },
    {
      title: "Autonomous Unmanned Surface Vehicle",
      version: null,
      period: "2019",
      metadata: "Teknofest — Finalist",
      stack: ["C/C++", "Python", "OpenCV"],
      description: "Led three-person engineering team in Teknofest 2019 'Robotik Fetih 1453' challenge. Developed object-detection and mission-execution capabilities using OpenCV, NumPy, custom C modules. Vessel navigated between red vessels autonomously, retrieved green targets, operated onboard projectile mechanism. Advanced to finalist stage.",
      publications: []
    }
  ],

  experiences: [
    {
      title: "Engineering Intern",
      company: "TUSAS Engine Industries Inc. (TEI)",
      period: "August 2024 - September 2024",
      location: "Eskisehir, Turkey",
      description: [
        "Worked with both embedded software design and hardware design teams.",
        "Gained experience in developing safety-critical aviation software with DO-178C standards."
      ]
    },
    {
      title: "Engineering Intern",
      company: "BMC Otomotiv Sanayi ve Ticaret A.Ş.",
      period: "August 2023 - September 2023",
      location: "Izmir, Turkey",
      description: [
        "Completed summer internship at BMC Automotive's R&D department, involved in the development of an autonomous military vehicle.",
        "Contributed to both hardware and software aspects of the project, collaborating closely with interdisciplinary teams.",
        "Gained experience using path-finding algorithms such as A* and RRT using the C/C++ programming language."
      ]
    }
  ],

  about: {
    text: [
      "As an avid engineering enthusiast, I'm constantly exploring and expanding my knowledge and skills in the field.",
      "My passion for finding innovative solutions to complex problems has led me to work on exciting projects in electronics, mechanics, software development, and AI.",
      "I'm particularly fascinated by the potential of AI to transform the way we live and work.",
      "For me, engineering is not just a career, it's a passion."
    ],
    image: "assets/profile-about.jpg",
    cvLink: "assets/cv.pdf"
  },

  skills: {
    "Technical": [
      "Control Systems",
      "Robotics",
      "Autonomous Systems",
      "Embedded Systems"
    ],
    "Software": [
      "C/C++",
      "Python",
      "ROS2",
      "CUDA"
    ],
    "Tools": [
      "SolidWorks",
      "Proteus",
      "AutoCAD"
    ]
  },

  contact: {
    email: "akara.engineer@gmail.com",
    linkedin: "https://www.linkedin.com/in/abkara/",
    github: "https://github.com/ahmetbrkka"
  }
};

// Configuration constants
const CONFIG = {
  svgIcons: {
    email: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
    linkedin: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>`,
    github: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>`
  },
  linkAttrs: {
    external: 'target="_blank" rel="noopener noreferrer"'
  },
  ariaLabels: {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub"
  }
};
