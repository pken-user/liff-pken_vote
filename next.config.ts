import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const isDev = process.env.NODE_ENV === "development";
    return [
      {
        source: "/wp-api/:path*",
        destination: isDev
          ? "http://localhost:pken-vote/wp-json/:path*"
          : "https://komeiji.p-kmt.com/wp-json/:path*", // 本番WPのURLに修正
      },
    ];
  },
};

export default nextConfig;