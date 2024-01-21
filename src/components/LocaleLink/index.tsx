import Link, { LinkProps } from "next/link";
import useLocale from "@/hooks/useLocale";
import { FC, PropsWithChildren } from "react";

const LocaleLink: FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => {
  const locale = useLocale();
  const { href } = props;

  const url = (href as string).startsWith(`/${locale}`)
    ? href
    : `/${locale}${props.href}`;

  return <Link href={url}>{children}</Link>;
};

export default LocaleLink;
