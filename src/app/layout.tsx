/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import Header from "@/components/layout/Header";
import "./globals.css";
import "./responsive.css";
import Footer from "@/components/layout/Footer";
import BodyTags from "@/components/layout/BodyTags";
// import Head from "next/head";
import HeaderTags from "@/components/layout/HeaderTags";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
          {process.env.NODE_ENV === 'production' && <HeaderTags />}

        </head>
      <body >
        <Header />
        
        <main className="h-dvh">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <BodyTags />}
      </body>
    </html>
  );
}