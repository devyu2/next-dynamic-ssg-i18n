import Footer from "@/components/Footer";
import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Test1Page = () => {
  const router = useRouter();
  const { t } = useTranslation(["test1"]);

  return (
    <div>
      <div>Test1Page : {router.asPath}</div>
      <Footer text={t("text")} />
    </div>
  );
};

export default Test1Page;

const getStaticProps = makeStaticProps(["test1"]);
export { getStaticPaths, getStaticProps };
