export const portfolioData = {
  name: "Jane Doe",
  tagline: "Software Engineer & AI Researcher",
  about: "A passionate and driven software engineer with a knack for building elegant and efficient solutions. I thrive in collaborative environments and am always eager to learn new technologies and take on challenging problems. My interests lie in full-stack development, machine learning, and creating impactful products.",
  links: {
    resume: "/assets/resume.pdf",
    linkedin: "https://www.linkedin.com/in/",
    email: "mailto:jane.doe@example.com",
    github: "https://github.com/",
  },
  education: [
    {
      degree: "Master of Science in Computer Science",
      university: "Stanford University",
      period: "2021 - 2023",
      description: "Specialized in Artificial Intelligence. Thesis on generative models for creative content."
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      university: "University of Waterloo",
      period: "2017 - 2021",
      description: "Graduated with Distinction. President of the AI and Robotics Club."
    }
  ],
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Innovate Inc.",
      period: "Summer 2022",
      description: [
        "Developed and maintained features for a large-scale data processing pipeline using Python and Go.",
        "Improved system reliability by 20% through implementing a robust automated testing suite.",
        "Collaborated with a team of 12 engineers in an agile development environment."
      ]
    },
    {
      title: "Project 'Aether'",
      company: "Personal Project",
      period: "2023 - Present",
      description: [
        "Building a full-stack web application for real-time collaborative document editing using React, TypeScript, and a CRDT-based backend.",
        "Implemented a user-friendly interface with rich text formatting capabilities.",
        "Deployed the application on Vercel, with a backend running on Fly.io."
      ]
    }
  ],
  skills: [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "Python", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "SQL (PostgreSQL) / NoSQL (MongoDB)", level: 80 },
    { name: "Cloud (AWS, Vercel)", level: 75 },
    { name: "Docker & Kubernetes", level: 70 },
  ],
  responsibilities: [
    {
      role: "Lead Developer",
      organization: "Open Source Project 'Starlight'",
      period: "2022 - Present",
      description: "Leading the development of a community-driven data visualization library. Responsible for architectural decisions, code reviews, and mentoring new contributors."
    },
    {
      role: "Teaching Assistant",
      organization: "Stanford University",
      period: "2022",
      description: "Assisted in teaching 'CS229: Machine Learning'. Conducted office hours, graded assignments, and helped students with course material and projects."
    }
  ]
};

export type PortfolioData = typeof portfolioData;
