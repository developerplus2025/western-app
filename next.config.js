const { withNextVideo } = require("next-video/process");
const { createMDX } = require("fumadocs-mdx/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   viewTransition: true,
  // },
  images: {
    formats: ["image/avif"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      type: "asset/resource",
    });
    return config;
  },
};

// Gộp với next-video & MDX
module.exports = withNextVideo(createMDX()(nextConfig));
