/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '*.ufs.sh', // Covers 9l2xynzcqu.ufs.sh and other subdomains
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
