/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React from 'react';
import Heading2 from '@/components/element/Heading2';
import SubHeading from '@/components/element/SubHeading';
import BlogCard, { IBlog } from '@/components/card/BlogCard';
import Container from '@/components/element/Container';
import Pagination from '@/components/ui/Pagination';
import Button from '@/components/element/Button';
import Link from 'next/link';


// Example blog data - Replace this with your actual data from API/Database
const blogs: IBlog[] = [
    {
        id: '1',
        title: 'Building a Modern Web Application with Next.js and TypeScript',
        description: `Learn how to create a performant and type-safe web application using Next.js 13 and TypeScript. We'll cover everything from setup to deployment.`,
        content: '',
        coverImage: '/images/blogs/nextjs-typescript.jpg',
        author: {
            name: 'Muhammad Mubtasim',
            avatar: '/images/avatar.jpg'
        },
        category: 'Web Development',
        tags: ['Next.js', 'TypeScript', 'React'],
        readTime: 8,
        publishedAt: '2025-04-28',
        slug: 'building-modern-web-application-nextjs-typescript'
    },
   
   
];

const BlogsPage = () => {
    return (
        <main className="min-h-screen bg-gray-900 py-20">
            {/* Header Section */}
            <section className="text-center container mx-auto px-4 mb-16">
                <Heading2>My Blog</Heading2>
                <SubHeading>
                    Sharing my thoughts, experiences, and knowledge about web development,
                    programming, and technology.
                </SubHeading>
            </section>

            {/* Blog Grid */}
            <Container className='flex flex-col items-center'>
                {/* Categories/Tags Filter - Optional */}
                {/* <div className="mb-8 flex flex-wrap gap-2">
                    {['All', 'Web Development', 'TypeScript', 'React', 'Node.js'].map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div> */}

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                <div className="text-center mt-12">
          <Button variant={'primary'} >
          <Link
            href="/projects"
           className='flex flex-row justify-center items-center w-full'
          >
            Read In Bangla
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
            </Container>
        </main>
    );
};

export default BlogsPage;