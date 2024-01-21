import Footer from "@/components/Footer";
import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useTranslation } from "next-i18next";
import LocaleLink from "@/components/LocaleLink";
import useLocale from "@/hooks/useLocale";

const Test1Page = () => {
  const { t } = useTranslation(["test1"]);

  const locale = useLocale();

  return (
    <div>
      <Footer text={t("text")} />
      <div>
        <LocaleLink href={"/test2"}>{t("navigationText")}</LocaleLink>
      </div>
      <div>
        <LocaleLink href={`/${locale}/test2`}>{t("navigationText")}</LocaleLink>
      </div>
    </div>
  );
};

export default Test1Page;

const getStaticProps = makeStaticProps(["test1"]);
export { getStaticPaths, getStaticProps };
