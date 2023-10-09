/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverModuleFormat: "cjs",
  future: {
    cssSideEffectImports: true,
  },
  serverDependenciesToBundle: [/@vercel\/analytics/],
  tailwind: true,
  postcss: true,
};
