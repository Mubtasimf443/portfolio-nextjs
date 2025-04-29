"use client"
import ProjectCard from '@/components/card/ProjectCard';
import Button from '@/components/element/Button';
import Heading2 from '@/components/element/Heading2';
import Link from 'next/link';



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
          <Heading2>Projects</Heading2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant={'primary'} >
          <Link
            href="/projects"
           className='flex flex-row justify-center items-center w-full'
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
          </Button>
       
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;