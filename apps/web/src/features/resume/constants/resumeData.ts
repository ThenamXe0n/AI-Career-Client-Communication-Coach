export const INIT = {
  personal: {
    name: "Nameet Mandwal",
    phone: "+91 8319850260",
    email: "thenameet0@gmail.com",
    location: "Indore, M.P.",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/nameet-mandwal-601b201b3/",
    github: "GitHub",
    githubUrl: "https://github.com/ThenamXe0n",
    portfolio: "Portfolio",
    portfolioUrl: "https://portfolio-beta-sandy.vercel.app/",
    summary:
      "MERN Stack Developer with 2+ years of experience building scalable web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Skilled in developing RESTful APIs, authentication systems, real-time applications, admin dashboards, and responsive user interfaces. Experienced with Redux Toolkit, Socket.IO, JWT, OAuth, Tailwind CSS, and Agile development practices.",
  },

  education: [
    {
      id: 1,
      school: "ISBA Institute of Professional Studies, Indore (M.P.)",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2020 - 2023",
      grade: "CGPA: 7.4/10",
    },
  ],

  skills: [
    {
      id: 1,
      label: "Languages",
      value: "JavaScript (ES6+), TypeScript (Basic)",
    },
    {
      id: 2,
      label: "Frontend",
      value:
        "React.js, Next.js, Redux Toolkit, Context API, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI",
    },
    {
      id: 3,
      label: "Backend",
      value:
        "Node.js, Express.js, REST APIs, JWT Authentication, OAuth 2.0, Socket.IO, WebSockets, Zod Validation",
    },
    {
      id: 4,
      label: "Database",
      value:
        "MongoDB, Mongoose ODM, Aggregation Pipeline, Schema Design",
    },
    {
      id: 5,
      label: "Tools",
      value:
        "Git, GitHub, Postman, VS Code, Linux, Docker (Basic), Vercel, Netlify",
    },
    {
      id: 6,
      label: "Concepts",
      value:
        "Authentication & Authorization, RBAC, API Integration, Performance Optimization, Agile/Scrum",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Assistant Software Engineer",
      company: "MINDCODERS, Indore",
      period: "March 2024 - Present",
      points: [
        "Developed and maintained CRM, LMS, and Student Management Systems using the MERN stack.",
        "Built scalable RESTful APIs and integrated frontend-backend modules.",
        "Created responsive dashboards using React.js, Redux Toolkit, Tailwind CSS, and Material UI.",
        "Implemented JWT/OAuth authentication and role-based access control (RBAC).",
        "Collaborated with cross-functional teams for development, testing, deployment, and performance optimization.",
        "Participated in code reviews and improved application scalability through reusable component architecture.",
      ],
    }
  ],

  projects: [
     {
      id: 1,
      name: "E-Lite Auction",
      type: "Real-Time Auction Platform",
      url: "https://e-lite.co.in",
      urlLabel: "https://e-lite.co.in",
      description:
        "Real-time industrial auction platform with instant bidding and role-based access management.",
      points: [
        "Developed real-time bidding functionality using Socket.IO.",
        "Implemented role-based dashboards for Admin, Client, and Bidder management.",
        "Built automated auction closure, bid synchronization, and timer extension mechanisms.",
      ],
    },
    {
      id: 2,
      name: "GPHBooks",
      type: "Full Stack eCommerce Platform",
      url: "https://gphbooks.com",
      urlLabel: "https://gphbooks.com",
      description:
        "Production-ready eCommerce platform with dynamic admin management, authentication, referral system, and order processing.",
      points: [
        "Developed a dynamic admin dashboard for managing products, orders, offers, and website content.",
        "Implemented Google OAuth, JWT authentication, referral system, and automated email workflows.",
        "Built scalable APIs for product, order, offer, and user management.",
      ],
    },
   
    // {
    //   id: 3,
    //   name: "SaaS CRM Management System",
    //   type: "Enterprise CRM Application",
    //   url: "#",
    //   urlLabel: "Private Project",
    //   description:
    //     "CRM platform for lead management, task tracking, follow-up scheduling, and business analytics.",
    //   points: [
    //     "Implemented lead assignment, follow-up scheduling, and workflow automation.",
    //     "Designed scalable MongoDB schemas and optimized backend queries.",
    //     "Developed secure role-based authentication and reporting modules.",
    //   ],
    // },
  ],
};