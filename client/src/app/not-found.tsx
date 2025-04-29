/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import Link from 'next/link';
import { Metadata } from 'next';
import { Terminal, Home, FileCode2, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Muhammad Mubtasim',
    description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  let pathName = usePathname();
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
                {/* Terminal-like Error Display */}
                <div className="bg-gray-800 rounded-lg p-4 mb-8 mx-auto max-w-md">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm">
                        <p className="text-primary-500">
                            <Terminal className="inline-block w-4 h-4 mr-2" />
                            Error: 404
                        </p>
                        <p className="text-gray-400 mt-1">
                            $ page.find(&#34;{pathName}&#34;)
                        </p>
                        <p className="text-red-400 mt-1">
                            PageNotFoundError: Unable to locate the requested resource
                        </p>
                    </div>
                </div>

                {/* Error Message */}
                <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
                    4<span className="text-primary-500">0</span>4
                </h1>
                <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                    Page Not Found
                </h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Looks like this route hasn&#39;t been implemented yet. 
                    Don&#39;t worry, you can navigate back using these links:
                </p>

                {/* Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                    <Link
                        href="/home"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </Link>
                    <Link
                        href="/projects"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                        <FileCode2 className="w-5 h-5" />
                        View Projects
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-gray-400">
                    <p className="mb-4">Need assistance? Feel free to contact me:</p>
                    <Link
                        href="/home#contact"
                        className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </Link>
                </div>

                {/* Code Comment */}
                <div className="mt-8 font-mono text-sm text-gray-500">
                    {/* ASCII Art */}
                    <pre className="hidden md:block text-center text-xs leading-tight mb-2">
                        {`
     _____   ___  __ _  _   
    |  _  | / _ \\/ _  || |  
    | |_| |/ /_\\  (_| || |_ 
    |_____/\\___/ \\__,_||___/
                        `}
                    </pre>
                    <p>/* Sometimes the best code is the one that doesn&#39;t exist */</p>
                </div>
            </div>
        </div>
    );
}