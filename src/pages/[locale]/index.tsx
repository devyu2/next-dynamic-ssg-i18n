import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useRouter } from "next/router";

export const LocaleIndexPage = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export default LocaleIndexPage;

const getStaticProps = makeStaticProps(["root"]);
export { getStaticPaths, getStaticProps };
