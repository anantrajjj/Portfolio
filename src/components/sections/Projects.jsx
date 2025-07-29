import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import Section, { SectionTitle } from '@/components/Section';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// --- Data is now defined at the top ---
const projectsData = [
    {
      title: 'Distributed Athlete Management System',
      tech: 'JAVA, TENSORFLOW, ...',
      image: '/assets/images/project1.png', // <-- Path corrected
      description: 'A full-stack platform to help athletes track performance...',
      highlights: ['Developed a scalable Java backend...', 'Implemented a TensorFlow model...'],
      link: 'https://github.com/anantrajjj...'
    },
    {
      title: 'Online Examination System',
      tech: 'DISTRIBUTED SYSTEMS, AI...',
      image: '/assets/images/project2.png', // <-- Path corrected
      description: 'A secure platform for conducting online exams...',
      highlights: ['Designed a backend supporting 200+ concurrent users...', 'Integrated an AI-proctoring system...'],
      link: 'https://github.com/anantrajjj...'
    },
    {
      title: 'Security Project Lead',
      tech: 'PYTHON, ANOMALY DETECTION...',
      image: '/assets/images/project3.jpeg', // This path was already correct
      description: 'A project focused on enterprise security monitoring...',
      highlights: ['Deployed distributed Wazuh IDS...', 'Developed Python-based anomaly detection...'],
      link: 'https://github.com/anantrajjj'
    }
  ];

const ProjectModal = ({ project, isOpen, onClose }) => {
    // ... (This component remains unchanged)
    if (!project) return null;
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* ... modal content ... */}
        </Dialog>
    );
};

// --- The component no longer takes 'projects' as a prop ---
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const cardVariants = {
    // ... (variants remain unchanged)
  };

  return (
    <Section id="projects">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Projects.dat</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- It now maps over the 'projectsData' array directly --- */}
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="pixel-card group cursor-pointer"
              // ... (rest of the props are unchanged)
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-32 bg-black mb-4 flex items-center justify-center border-2 border-[var(--pixel-light)]">
                <img
                  alt={`${project.title} cartridge icon`}
                  src={project.image}
                />
              </div>
              <h3 className="text-2xl pixel-font text-[var(--pixel-accent-3)] group-hover:text-[var(--pixel-accent-4)] transition-colors">
                {project.title}
              </h3>
              <p className="text-md text-[var(--pixel-accent-1)] mt-2 pixel-font truncate">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
};

export default Projects;