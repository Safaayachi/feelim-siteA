// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "en",
		localeDetection: false,
	},
	localePath:
		typeof window === "undefined"
			? require("path").resolve("./public/locales")
			: "/locales",

	reloadOnPrerender: process.env.NODE_ENV === "development",
};
