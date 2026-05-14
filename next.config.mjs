/** @type {import('next').NextConfig} */
const repoBasePath = "/portfoli.O_o";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export',
  basePath: isProduction ? repoBasePath : '',
  assetPrefix: isProduction ? `${repoBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? repoBasePath : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
