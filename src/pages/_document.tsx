import Document, { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../../next-i18next.config";

class MyDocument extends Document {
  render() {
    const queryLocale = this.props.__NEXT_DATA__.query.locale;
    const currentLocale =
      typeof queryLocale === "string"
        ? queryLocale
        : i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
