import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  // Vercel defaults; no static export
};

export default withFlowbiteReact(nextConfig);