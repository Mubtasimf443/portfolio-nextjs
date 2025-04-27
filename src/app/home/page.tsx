/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react';
import type { Metadata } from "next";
import HeroSection from './_components/HeroSection';
import SkillsSection from './_components/SkillsSection';
import AboutSection from './_components/AboutSection';
import ProjectsSection from './_components/ProjectsSection';
import ContactSection from './_components/ContactSection';

export const metadata: Metadata = {
    title: "Muhammad Mubtasim Fuad | Full Stack Web Developer | Bangladesh",
    description: "18yo Programmer & FullStack Dev from Bangladesh 🌏 | Node.js, Python , Next.js | Learning Golang & DevOps ⚙️ | Building online projects 🚀",
  };
  
interface Props {

};

const page :FC<Props> = ({}) => {
  return (
    <Fragment>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Fragment>
  )
};

export default page;