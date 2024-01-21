module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "de", "it", "ko"],
  },
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // serializeConfig: false,
};
