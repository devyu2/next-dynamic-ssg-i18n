import { useRouter } from "next/router";

export const LocationPage = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export default LocationPage;
