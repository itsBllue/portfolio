/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    cdn:"https://portfolio-tanweer.s3.eu-west-2.amazonaws.com"
  },
  experimental: {
    appDir: true,
  },
  images:{
    domains:[
      "portfolio-tanweer.s3.eu-west-2.amazonaws.com",
      "raw.githubusercontent.com",
      "cdn.jsdelivr.net",
      "www.vectorlogo.zone"
    ]
  }
}

module.exports = nextConfig
