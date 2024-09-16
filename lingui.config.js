/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
  locales: ["cs", "en"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  compileNamespace: "es",
};

export default config;
