import languageDetector from "@/config/languageDetector";
import { useRouter } from "next/router";
import { useEffect } from "react";
import i18nextConfig from "../../next-i18next.config";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  const path = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng =
      languageDetector.detect() ?? i18nextConfig.i18n.defaultLocale;

    console.log("router: ", router);
    console.log("test: ", { to, asPath: router.asPath });

    console.log(
      "detectedLng : ",
      router.query.locale,
      languageDetector.detect(),
      i18nextConfig.i18n.defaultLocale,
    );

    console.log("path: ", path);
    console.log("router.route : ", router.route);

    if (path.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    if (languageDetector.cache) {
      languageDetector.cache(detectedLng);
    }

    router.replace("/" + detectedLng + path);
  });

  return <></>;
};
