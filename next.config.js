/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");
const nextConfig = {
  images: {
    domains: ["i.pinimg.com"], // Add the external image domain here
  },
};

module.exports = withNextVideo(nextConfig);
