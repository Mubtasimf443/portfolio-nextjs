/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["img.icons8.com","placehold.co" , "upload.wikimedia.org" , 'images.unsplash.com'],
        dangerouslyAllowSVG: true,
        // remotePatterns :  ["img.icons8.com","placehold.co" ],
    }
};

export default nextConfig;
