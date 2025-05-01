/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BodyTags from "@/components/layout/BodyTags";
import HeaderTags from "@/components/layout/HeaderTags";
import { Metadata } from 'next';
import Head from "next/head";

const baseUrl = 'https://muhammadmubtasimfuad.onrender.com';

export const metadata: Metadata = {
  keywords: [
    'Full Stack Developer',
    'JavaScript Developer',
    'TypeScript',
    'React Developer',
    'Node.js Developer',
    'Python Developer',
    'Web Developer',
    'Backend Developer',
    'Frontend Developer',
    'FastAPI Developer',
    'Next.js Developer',
    'MongoDB Specialist',
    'PostgreSQL Specialist',
    'AWS Specialist',
    'DevOps Specialist',
    'Bangladeshi Web Developer'
  ],
  authors: [{ name: 'Muhammad Mubtasim' }],
  creator: 'Muhammad Mubtasim',
  publisher: 'Muhammad Mubtasim',
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Muhammad Mubtasim - Full Stack Developer',
    title: 'Muhammad Mubtasim - Senior Full Stack Developer',
    description: 'Senior Full Stack Developer crafting exceptional web experiences with modern technologies.',
    images: [
      {
        url: `${baseUrl}/static/img/600X600.jpg`, // Create this image
        width: 1200,
        height: 630,
        alt: 'Muhammad Mubtasim - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MubtasimFu11492',
    creator: '@MubtasimFu11492',
    title: 'Muhammad Mubtasim - Senior Full Stack Developer',
    description: 'Senior Full Stack Developer crafting exceptional web experiences with modern technologies.',
    images: [`${baseUrl}/static/img/600X600.jpg`], // Create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Head>
        {process.env.NEXT_PUBLIC_NODE_ENV === 'production' && <HeaderTags />}
      </Head>
      <Header />
      <main className="min-h-dvh pt-24">
        {children}
      </main>
      <Footer />
      {process.env.NEXT_PUBLIC_NODE_ENV === "production" && <BodyTags />}
    </>
  );
}