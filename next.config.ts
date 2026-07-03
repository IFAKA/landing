import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repositoryName;
const isUserOrOrgPagesSite = repositoryName?.endsWith('.github.io');
const basePath = isGitHubPagesBuild && !isUserOrOrgPagesSite ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
