
export const portfolioData = {
  name: "Ojasvi Raina",
  tagline: "Philosophy and EES Enthusiast\nOrator & Writer",
  about: "A dedicated student of Earth and Environmental Sciences at IISER Bhopal, with a minor in Biology. Passionate about atmospheric thermodynamics, geochemistry, and geology. Experienced content writer for social, cultural, and environmental themes. Active in leadership roles, including founding an NGO to teach underprivileged students, and managing creative content for a college club.",
  links: {
    linkedin: "https://linkedin.com/in/ojasvi-raina",
    email: "ojasvirainakcean@gmail.com",
    github: "https://github.com/oohjasvee",
  },
  education: [
    {
      degree: "BS–MS Earth and Environmental Sciences (Major), Biology (Minor)",
      university: "Indian Institute of Science Education and Research Bhopal",
      period: "2024 – Present",
      description: "CGPA: 7.62. Key Courses: Geochemistry, Atmospheric Sciences, Oceanography, Geology, Biodiversity, Quantum Mechanics, Rock Petroleum."
    },
    {
      degree: "Class XII",
      university: "Central Board of Secondary Education (CBSE)",
      period: "2024",
      description: "Graduated with 94.5%."
    },
    {
      degree: "Class X",
      university: "Central Board of Secondary Education (CBSE)",
      period: "2022",
      description: "Graduated with 93.5%."
    }
  ],
  experience: [
    {
      title: "Reading Project: Atmospheric Thermodynamics",
      company: "IISER Bhopal",
      period: "2025",
      description: [
        "Studied fundamental and applied concepts of atmospheric thermodynamics, including lapse rates, stability, and cloud formation processes under Dr. Shubhi Agarwal."
      ]
    },
    {
      title: "Content Writer",
      company: "Jammu Writers’ Club",
      period: "2022 - Present",
      description: [
        "Produced written content focusing on social, cultural, and environmental themes for organizational publications."
      ]
    }
  ],
  skills: [
    { name: "Content Writing & Oration", level: 95 },
    { name: "Graphic & Creative Designing", level: 90 },
    { name: "Python", level: 50 },
    { name: "C++", level: 75 },
    { name: "U–Pb Dating", level: 95 },
    { name: "Languages (English, Hindi, Kashmiri, Urdu)", level: 95 },
    { name: "Languages (Dogri, French)", level: 70 },
  ],
  responsibilities: [
    {
      role: "Founder and Teacher",
      organization: "Nav Setu NGO",
      period: "2023 - Present",
      description: "Founded and taught underprivileged students, focusing on basic education and social upliftment."
    },
    {
      role: "Creative Head",
      organization: "Aalekhya, IISER-B",
      period: "2025 - Present",
      description: "Managed all the social media and content of the club."
    },
    {
      role: "Youngest Representative",
      organization: "Helpline Humanity (Government-Run NGO)",
      period: "2015 - Present",
      description: "Represented youth initiatives in projects related to Kashmiri Pandit relocation and rehabilitation."
    }
  ]
};

export type PortfolioData = typeof portfolioData;
