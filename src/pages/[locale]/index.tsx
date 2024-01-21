import LocaleLink from "@/components/LocaleLink";
import { getStaticPaths, makeStaticProps } from "@/utils/getStatic";
import { useRouter } from "next/router";

export const LocaleIndexPage = () => {
  const router = useRouter();

  return (
    <div>
      <div>{router.asPath}</div>
      <div>
        <LocaleLink href="/test1">페이지1이동</LocaleLink>
      </div>
      <div>
        <LocaleLink href="/test2">페이지2이동</LocaleLink>
      </div>
    </div>
  );
};

export default LocaleIndexPage;

const getStaticProps = makeStaticProps(["root"]);
export { getStaticPaths, getStaticProps };
