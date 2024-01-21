import Header from "@/components/Header";
import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Test2Page = () => {
  const router = useRouter();
  const { t } = useTranslation(["test2"]);

  return (
    <div>
      <Header title={t("title")} heading={t("h1")} />
      <div>Test2Page : {router.asPath}</div>
    </div>
  );
};

export default Test2Page;

const getStaticProps = makeStaticProps(["test2"]);
export { getStaticPaths, getStaticProps };
