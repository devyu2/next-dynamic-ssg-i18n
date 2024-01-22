import { useRouter } from "next/router";
import { useEffect } from "react";
import i18nextConfig from "../../next-i18next.config";
import languageDetector from "@/config/languageDetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  const path = to || router.asPath;

  useEffect(() => {
    const detectedLanguage = languageDetector.detect();
    console.log("detectedLanguage : ", detectedLanguage);

    const isExistLocale = (firstPath?: string) => {
      if (!firstPath) {
        return false;
      }
      return i18nextConfig.i18n.locales.some(locale => locale === firstPath);
    };

    let pathLocale = null;
    const pathArr = path.split("/");
    if (pathArr.length > 1 && isExistLocale(pathArr[1])) {
      pathLocale = pathArr[1];
    }

    if (!pathLocale) {
      pathLocale = isExistLocale(detectedLanguage)
        ? detectedLanguage
        : i18nextConfig.i18n.defaultLocale;
    }

    console.log("pathLocale :", pathLocale);

    if (path.startsWith("/" + pathLocale) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + pathLocale + router.route);
      return;
    }

    router.replace("/" + pathLocale + path);
  });

  return <></>;
};
