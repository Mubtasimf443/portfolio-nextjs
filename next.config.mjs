/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["img.icons8.com","placehold.co" , "upload.wikimedia.org"],
        dangerouslyAllowSVG: true,
        // remotePatterns :  ["img.icons8.com","placehold.co" ],
    }
};

export default nextConfig;
