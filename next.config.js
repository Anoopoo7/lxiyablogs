/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  prismicApiEndpoint:
    process.env.API_END_POINT || "https://lxiya-uat.prismic.io/api/v2",
  PrismicAccessToken:
    process.env.API_ACCESS_TOKEN ||
    "MC5ZaFBOdkJFQUFDa0FyLVQ3.77-977-977-9eu-_vWTvv73vv73vv70R77-9Vkrvv70J77-9HO-_ve-_ve-_ve-_ve-_ve-_vRZq77-9Ylvvv70Z77-9UA",
};

module.exports = nextConfig;
