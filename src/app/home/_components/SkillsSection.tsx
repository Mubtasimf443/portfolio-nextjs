"use client"
import React from 'react';
import SkillsCard from './SkillsCard';
import { 
  Database, 
  Server, 
  Cpu, 
  Code2, 
  Globe, 
  Cloud,
  Terminal,
  MonitorSmartphone
} from 'lucide-react';

// Define the skills data structure
interface Skill {
    name: string;
    icon?: string;
    alt?: string;
    LucideIcon?: any;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

// Skills data
const skillsData: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "JavaScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                alt: "JavaScript"
            },
            {
                name: "TypeScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                alt: "TypeScript"
            },
            {
                name: "Python",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                alt: "Python"
            },
            {
                name: "Golang",
                icon: "/static/icon/golang.svg",
                alt: "Golang"
            },
            {
                name: "SQL",
                LucideIcon: Database
            }
        ]
    },
    {
        title: "Frontend Development",
        skills: [
            {
                name: "React",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React"
            },
            {
                name: "Next.js",
                icon: "/static/icon/nextjs.svg",
                alt: "Next.js"
            },
            {
                name: "Tailwind CSS",
                icon: "/static/icon/tailwind.svg",
                alt: "Tailwind CSS"
            },
            {
                name: "Bootstrap",
                icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
                alt: "Bootstrap"
            }
        ]
    },
    {
        title: "Backend Development",
        skills: [
            {
                name: "Node.js",
                icon: "/static/icon/nodejs.svg",
                alt: "Node.js"
            },
            {
                name: "FastAPI",
                LucideIcon: Server
            },
            {
                name: "Flask",
                icon: "/static/icon/flask.svg",
                alt: "Flask"
            },
            {
                name: "Gin Gonic",
                icon: "/static/icon/gin.svg",
                alt: "Gin Gonic"
            }
        ]
    },
    {
        title: "Database Technologies",
        skills: [
            {
                name: "PostgreSQL",
                icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                alt: "PostgreSQL"
            },
            {
                name: "MySQL",
                icon: "/static/icon/mysql.svg",
                alt: "MySQL"
            },
            {
                name: "MongoDB",
                icon: "https://img.icons8.com/nolan/96/mongo-db.png",
                alt: "MongoDB"
            },
            {
                name: "Redis",
                icon: "/static/icon/redis.svg",
                alt: "Redis"
            }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            {
                name: "AWS EC2",
                icon: "/static/icon/aws-ec2.svg",
                alt: "AWS EC2"
            },
            {
                name: "Ubuntu",
                icon: "https://img.icons8.com/?size=100&id=zrNxSf4ltkGV&format=png&color=149BDB",
                alt: "Ubuntu"
            },
            {
                name: "Docker",
                icon: "/static/icon/docker.svg",
                alt: "Docker"
            },
            {
                name: "Git",
                icon: "/static/icon/git.svg",
                alt: "Git"
            }
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            {
                name: "ChatGPT",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                alt: "ChatGPT"
            },
            {
                name: "GEMINI",
                LucideIcon: Cpu
            },
            {
                name: "DEEPSEEK",
                icon: "https://img.icons8.com/?size=100&id=YWOidjGxCpFW&format=png&color=536dfe",
                alt: "DEEPSEEK"
            },
            {
                name: "Replit",
                icon: "/static/icon/replit.svg",
                alt: "Replit"
            }
        ]
    },
    {
        title: "Web Analytics & Tools",
        skills: [
            {
                name: "Google Analytics 4",
                icon: "/static/icon/google-analytics.png",
                alt: "Google Analytics 4"
            },
            {
                name: "Google Tag Manager",
                icon: "/static/icon/google-tag-manager.png",
                alt: "Google Tag Manager"
            },
            {
                name: "Google Search Console",
                icon: "/static/icon/google-web-search.png",
                alt: "Google Search Console"
            },
            {
                name: "SEO Optimization",
                LucideIcon: Globe
            }
        ]
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-100 mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools I work with
                    </p>
                </div>

                <div className="space-y-16">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="text-2xl font-semibold text-gray-200 mb-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillsCard
                                        key={skillIndex}
                                        name={skill.name}
                                        src={skill.icon}
                                        alt={skill.alt}
                                        Icon={skill.LucideIcon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;