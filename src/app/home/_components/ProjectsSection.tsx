"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, imagePath, githubUrl, liveUrl }: ProjectCardProps) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
    <div className="relative h-48 w-full">
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover object-top"
        loading="lazy"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-primary-500 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-1">{description}</p>
      <div className="flex gap-4">
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary-500 hover:text-primary-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary-500 hover:text-primary-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Backend Admin Panel",
      description: "I have built backend Admin Panel of a Gojushinryu International Martial Arts Website",
      imagePath: "/static/img/gojushinryu.com_control-panal.png",
      githubUrl: "https://github.com/Mubtasimf443/Gojushinryu-website",
    },
    {
      title: "Gojushinryu-website",
      description: "This is Martial Arts School Website having the feature of use student management, ecommerce and else.",
      imagePath: "/static/img/gojushinryu.website.png",
      liveUrl: "https://gojushinryu.com",
    },
    {
      title: "Elementor Clone",
      description: "I had a plan to build something Like elementor page builder and I have made simple clone with JavaScript",
      imagePath: "/static/img/elementor_clone.png",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold 
              hover:bg-primary-600 transition-colors duration-300"
          >
            View More Projects
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;