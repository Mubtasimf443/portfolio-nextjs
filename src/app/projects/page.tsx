import { Metadata } from 'next';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import Heading2 from '@/components/element/Heading2';
import SubHeading from '@/components/element/SubHeading';

export const metadata: Metadata = {
  title: 'Projects of Muhammad Mubtasim',
  description: 'Portfolio of projects by Muhammad Mubtasim, Senior Full Stack Developer'
};

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
  {
    title: "Product Search Api",
    description: "I have built a product search api using Nodejs and Expressjs and Mysql",
    imagePath: "/static/img/product_search_api_dem.png",
    githubUrl: "https://github.com/Mubtasimf443/Advance-Product-Search-Api",
  },
  {
    title: "PDF Processing Backend API",
    description: "I have built PDF Processing Backend API's with Python FastAPI",
    imagePath: "/static/img/github.com_Mubtasimf443_fastapi-pdf-Processing-Backend.png",
    githubUrl: "https://github.com/Mubtasimf443/fastapi-pdf-Processing-Backend",
  },
  {
    title: "Photo Editing Tool",
    description: "I have built Photo Editing Tool using Reactjs and Jim.js",
    imagePath: "/static/img/photo-editing-website-by-mern.onrender.com_.png",
    githubUrl: "https://github.com/Mubtasimf443/Photo-Editor-React.js",
  },
];

const ProjectsPage = () => {
  return (
    <section className="pb-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div> */}
          <Heading2 >My Projects</Heading2>
          <SubHeading>
            A collection of my work showcasing my skills in full-stack development, 
            from web applications to APIs and tools.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;