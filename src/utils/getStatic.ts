import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";
import type { GetStaticPropsContext } from "next";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map(lng => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: GetStaticPropsContext,
  ns = ["common"],
) {
  const locale = ctx?.params?.locale;

  console.log("locale :", locale, ns);

  const props = {
    ...(await serverSideTranslations(
      typeof locale === "string" ? locale : i18nextConfig.i18n.defaultLocale,
      ns,
    )),
  };
  return props;
}

export function makeStaticProps(ns: string[] = []) {
  return async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
