/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["portfolio-tanweer.s3.eu-west-2.amazonaws.com"]
  }
}

module.exports = nextConfig
