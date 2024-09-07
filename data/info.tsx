export const Name = "Pomeroy Appraisal";
export const NameLong = "Pomeroy Appraisal Associates of Florida";
export const NameLongInc = "Pomeroy Appraisal Associates of Florida Inc";
export const NameJustInc = "Associates of Florida Inc";

export const Description = "Pomeroy Appraisal Associates of Florida serves residential and commercial properties of Volusia, Flagler, Brevard, and Seminole counties in Florida";
export const DescriptionBanner = 'Banner for PAAFL.com with a green logo and green text centered on a white background. The text reads "Pomeroy Appraisal Associates of Florida Inc".'
export const ContactCTA = "We are eager to talk to you about any inquiries you might have about appraisals or real estate in the Volusia, Flagler, Brevard, and Seminole counties of Florida.";

export const Domain = "PAAFL.com";
export const EmailMain = "Info@PAAFL.com";
export const GitHub = "https://github.com/derek-perry/paafl.com";

export const Pages = [
  { title: "Home", href: "" },
  { title: "Get an Appraisal", href: "appraisal" },
  { title: "Services", href: "services" },
  { title: "Service Area", href: "service-area" },
  { title: "FAQ", href: "faq" },
  { title: "Contact Us", href: "contact" }
];

export const JsonLdBusiness = () => {
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