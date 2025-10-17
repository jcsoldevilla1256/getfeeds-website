import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  basePath: '/getfeeds', // Replace with your repo name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withFlowbiteReact(nextConfig);