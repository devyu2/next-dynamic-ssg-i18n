import { useRouter } from "next/router";
import i18nextConfig from "../../next-i18next.config";

const useLocale = () => {
  const router = useRouter();
  const routerQueryLocale = router.query.locale;

  return typeof routerQueryLocale === "string"
    ? routerQueryLocale
    : i18nextConfig.i18n.defaultLocale;
};

export default useLocale;
