import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const addJsonLd = () => {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "LocalBusiness",
        "name": "Pomeroy Appraisal Associates of Florida",
        "image": "https://paafl.com/banner.png",
        "url": "https://paafl.com",
        "telephone": "386-423-5110",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "600 N Ridgewood Ave",
          "addressLocality": "Edgewater",
          "addressRegion": "FL",
          "postalCode": "32132",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.00328349999999,
          "longitude": -80.91390400000002
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
        "sameAs": "https://paafl.com"
      }`
    };
  };
  return (
    <Html lang="en">
      <Head>
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script id="plausible-analytics" defer strategy="beforeInteractive" data-domain="paafl.com" src="https://plausible.io/js/script.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};