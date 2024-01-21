import { useRouter } from "next/router";
import i18nextConfig from "../../next-i18next.config";
import { useEffect } from "react";

const useLocale = () => {
  const router = useRouter();
  const routerQueryLocale = router.query.locale;

  useEffect(() => {
    console.log("tets11: ", router);
  }, [router]);

  console.log("tets: ", router.query.locale);
  return typeof routerQueryLocale === "string"
    ? routerQueryLocale
    : i18nextConfig.i18n.defaultLocale;
};

export default useLocale;
