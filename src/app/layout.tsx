/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import Header from "@/components/layout/Header";
import "./globals.css";
import "./responsive.css";
import Footer from "@/components/layout/Footer";
import Tags from "@/components/layout/Tags";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="h-dvh">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Tags />}
      </body>
    </html>
  );
}
