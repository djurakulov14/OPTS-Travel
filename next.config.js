/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const {i18n} = require("./next-i18next.config")

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "uzbekistan.travel", "www.advantour.com", "i.pinimg.com"],
  },
 i18n
}