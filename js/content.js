const content = {
  hero: {
    name: "Ahmet Burak Kara",
    title: "Engineer & Designer"
  },

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

  experiences: [
    {
      title: "Engineering Intern",
      company: "TUSAS Engine Industries Inc. (TEI)",
      period: "August 2024 - September 2024",
      location: "Eskisehir, Turkey",
      description: [
        "Worked with both embedded software design and hardware design teams.",
        "Gained experience in developing safety-critcal aviaton software with DO-178C standards."
      ]
    },
    {
      title: "Engineering Intern",
      company: "BMC Otomotiv Sanayi ve Ticaret A.Ş.",
      period: "August 2023 - September 2023",
      location: "Izmir, Turkey",
      description: [
        "Done my summer internshp at BMC Automotive's R&D department, involved in the development of an autonomous miltary vehicle.",
        "Contributed to both hardware and software aspects of the project, collaborating closely wth interdisciplinary teams.",
        "Gained experience using path-finding algorithms such as A* and RRT using the C/C++ programming language."
      ]
    }
  ],

  projects: [
    {
      title: "Distributed Computation on GPUs | TUSAŞ LiftUp | Supported by TÜBİTAK 2209-B | 2025",
      description: "Developed a distributed training infrastructure enabling heterogeneous GPU nodes at TUSAŞ to collaboratively train deep learning models over a custom TCP-based communication layer. Reverse-engineered the YOLOv8 training pipeline to identify synchronization points and designed a socket-based protocol for efficient parameter and loss exchange across nodes. Implemented CPU/GPU benchmarking modules, hardware-eligibility checks, dynamic workload scheduling, and GPU-accelerated parameter aggregation to optimize performance on asymmetric systems. Experiments demonstrated up to 73% convergence toward ideal training time, significantly reducing model training duration and improving resource utilization. The project was funded by the TÜBİTAK 2209-B Research Support Program, recognizing its innovation and applicability within TUSAŞ's distributed computing environment.",
      tools: ["C/C++", "Python", "YoloV8"],
      link: null,
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
      description: "Selected for the École 42 Istanbul intensive Piscine program and successfully completed the highly competitive 1-month training based on peer-to-peer and project-driven learning. Expanded C programming proficiency by implementing core standard library functions from scratch and completing collaborative system-level tasks.After ranking high enough to pass the Piscine, advanced to the main curriculum, where I developed low-level memory manipulation algorithms and strengthened my foundations in problem-solving, debugging, and team-based software development.",
      tools: ["C/C++", "Shell", "Algorithms and Data Structures"],
      link: null,
      publications: []
    },
    {
      title: "Autonomous Unmanned Surface Vehicle (Teknofest 2019 – Finalist)",
      description: "During high school, completed electronics, Arduino, C, and Python training under the instruction of Dr. Tankut Akgül. Formed a three-person engineering team and competed in Teknofest 2019's \"Robotik Fetih 1453\" challenge with an autonomous unmanned surface vehicle (USV).As team leader, coordinated project direction and team motivation while focusing on computer vision and systems integration. Developed the vessel's object-detection and mission-execution capabilities using OpenCV, NumPy, and custom C-based modules. The USV successfully navigated between red vessels, autonomously retrieved designated green targets, and operated an onboard projectile mechanism to complete mission objectives. The project advanced to the finalist stage of the national competition.",
      tools: ["C/C++", "Python"],
      link: null,
      publications: []
    }
  ],

  skills: {
    "Technical Skills": [
      "Control Systems Design",
      "Robotics",
      "ML/DL",
      "Autonomous Systems"
    ],
    "Software & Tools": [
      "C/C++",
      "Python",
      "SolidWorks",
      "Proteus",
      "AutoCAD",
      "Adobe Photoshop"
    ],
    "Languages": [
      "Turkish (Native)",
      "English (Fluent)"
    ]
  },

  contact: {
    email: "akara.engineer@gmail.com",
    linkedin: "https://www.linkedin.com/in/abkara/",
    github: "https://github.com/ahmetbrkka"
  }
};
