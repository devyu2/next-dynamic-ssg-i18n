import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useTranslation } from "next-i18next";

const NotFound = () => {
  const { t } = useTranslation(["404"]);

  return <div>{t("text")}</div>;
};

export default NotFound;

const getStaticProps = makeStaticProps(["404"]);
export { getStaticPaths, getStaticProps };
