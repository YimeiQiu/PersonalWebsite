/**
 * Get the base path for assets in production (GitHub Pages subdirectory)
 * In development, returns empty string
 * In production, returns the basePath from next.config
 */
export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? '';
};

/**
 * Prepend the base path to a URL
 * @param path - The path to prepend the base path to (e.g., '/vercel.svg')
 * @returns The full path with base path (e.g., '/PersonalWebsite/vercel.svg' in production)
 */
export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
