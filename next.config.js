/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.WITH_I18N === "true"
    ? {
        i18n: {
          defaultLocale: "en",
          locales: ["en", "fr"],
        },
      }
    : {}),
};

module.exports = nextConfig;
