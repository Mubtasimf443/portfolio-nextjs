"use client"
import React from 'react';
import SkillsCard from './SkillsCard';
import { skillsData } from '@/lib/data/skillsData';

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