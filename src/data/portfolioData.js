import { Code, Database, Server, Cloud, Terminal, Swords, Shield, Heart, Trophy, Github, Linkedin } from 'lucide-react';

export const skills = [
  { name: 'Cloud (AWS, Oracle)', level: 95, icon: Cloud, color: 'text-[var(--pixel-accent-1)]', type: 'Frameworks (Armor)' },
  { name: 'Data Structures', level: 90, icon: Shield, color: 'text-[var(--pixel-accent-2)]', type: 'Frameworks (Armor)' },
  { name: 'Machine Learning', level: 88, icon: Shield, color: 'text-white', type: 'Frameworks (Armor)' },
  { name: 'TensorFlow', level: 82, icon: Server, color: 'text-[var(--pixel-accent-1)]', type: 'Frameworks (Armor)' },
  { name: 'Java', level: 95, icon: Swords, color: 'text-[var(--pixel-accent-3)]', type: 'Languages (Weapons)' },
  { name: 'JavaScript', level: 55, icon: Swords, color: 'text-[var(--pixel-accent-4)]', type: 'Languages (Weapons)' },
  { name: 'Python', level: 50, icon: Swords, color: 'text-[var(--pixel-accent-2)]', type: 'Languages (Weapons)' },
  { name: 'MySQL', level: 98, icon: Database, color: 'text-[var(--pixel-accent-3)]', type: 'Databases (Potions)' },
  { name: 'PostgreSQL', level: 40, icon: Database, color: 'text-[var(--pixel-accent-4)]', type: 'Databases (Potions)' },
];

export const projects = [
  {
    title: "Distributed Athlete Management System",
    tech: "Java, TensorFlow, PostgreSQL, API Gateways",
    description: "Scalable Java backend serving 1000+ concurrent users with 99.5% uptime.",
    highlights: ["Optimized PostgreSQL schema", "40% faster query execution", "Distributed sessions"],
    link: "https://totalfit.netlify.app"
  },
  {
    title: "Online Examination System",
    tech: "Distributed Systems, AI Proctoring",
    description: "AI-powered proctoring system with 92% facial recognition accuracy.",
    highlights: ["200+ concurrent users", "Optimized data sync", "Reduced latency"],
    link: ""
  },
  {
    title: "Security Project Lead",
    tech: "Python, Anomaly Detection, VIT-AP",
    description: "Linux environment security monitoring with threat coverage enhancement.",
    highlights: ["28% false positive reduction", "50% performance boost", "35% query optimization"],
    link: "https://github.com/anantrajjj/PhishShield-Chrome-Extension"
  }
];

export const experience = [
  {
    role: "Security Project Lead",
    company: "VIT-AP",
    period: "Jun 2024 - May 2024",
    xp: 500,
    achievements: [
      "Enhanced threat coverage by 10%",
      "Developed Python-based anomaly detection pipelines",
      "Reduced false positive alerts by 28%"
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "Oct 2024",
    xp: 300,
    achievements: [
      "Enhanced C++/Python distributed queue system performance",
      "Built thread-safe data extraction modules",
      "Merged 4 pull requests across 3 repositories"
    ]
  },
  {
    role: "Event Management Lead",
    company: "VIT-AP",
    period: "Dec 2022 - Mar 2023",
    xp: 400,
    achievements: [
      "Coordinated 3 technical workshops on ML",
      "Developed multithreaded event server in Python",
      "Supported 500+ concurrent operations"
    ]
  }
];

export const achievements = [
    { title: "Oracle Cloud Architect Associate", icon: Trophy, org: "Oracle", date: "2025" },
    { title: "Oracle AI Foundations Associate", icon: Trophy, org: "Oracle", date: "2025" },
    { title: "AWS Cloud Practitioner", icon: Trophy, org: "AWS", date: "2024" },
];

export const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/anantrajjj' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/anantraj-prasad/' },
];

export const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];