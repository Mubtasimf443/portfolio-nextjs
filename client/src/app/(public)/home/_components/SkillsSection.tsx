"use client"
import React from 'react';
import SkillsCard from '@/components/card/SkillsCard';
import { skillsData } from '@/lib/data/skillsData';
import Heading2 from '@/components/element/Heading2';
import SubHeading from '@/components/element/SubHeading';
import Heading3 from '@/components/element/Heading3';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Heading2>Technical Skills</Heading2>
                    <SubHeading>
                        A comprehensive overview of my technical expertise and tools I work with
                    </SubHeading>
                </div>

                <div className="space-y-16">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-category">
                            <Heading3 className="text-2xl font-semibold text-gray-200 mb-8">
                                {category.title}
                            </Heading3>
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