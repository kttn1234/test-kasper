import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../next-i18next.config";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getI18nProps = async (locale: string, ns: string[]) => {
  // const locale = ctx?.params?.locale;
  ns = [...ns, "common"];
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  };
  return props;
};

export const makeStaticProps = (ns: string[]) => async (locale: any) => ({
  props: await getI18nProps(locale, ns),
});
