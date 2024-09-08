export const Name = "Pomeroy Appraisal";
export const NameLong = "Pomeroy Appraisal Associates of Florida";
export const NameLongInc = "Pomeroy Appraisal Associates of Florida Inc";
export const NameJustInc = "Associates of Florida Inc";

export const Description = "Pomeroy Appraisal Associates of Florida serves residential and commercial properties of Volusia, Flagler, Brevard, and Seminole counties in Florida";
export const DescriptionBanner = 'Banner for PAAFL.com with a green logo and green text centered on a white background. The text reads "Pomeroy Appraisal Associates of Florida Inc".'
export const ContactCTA = "We are eager to talk to you about any inquiries you might have about appraisals or real estate in the Volusia, Flagler, Brevard, and Seminole counties of Florida.";

export const Domain = "PAAFL.com";
export const EmailMain = "Info@PAAFL.com";
export const PhoneOffice = "386-423-5110";
export const PhoneTollFree = "888-388-1530";
export const PhoneFax = "386-423-3066";

export const Address = "600 N Ridgewood Ave";
export const AddressFull = "600 N Ridgewood Ave Suite A, Edgewater, FL 32132-1659";
export const AddressNumber = "600";
export const AddressStreet = "N Ridgewood Ave";
export const AddressSuite = "Suite A";
export const AddressCity = "Edgewater";
export const AddressState = "FL";
export const AddressZip = "32132";
export const AddressZipLong = "32132-1659";
export const AddressLinkGoogle = "https://google.com/maps/place/Pomeroy+Appraisal+Associates+of+Fl/@29.0032241,-80.9138731,15z/data=!4m6!3m5!1s0x88e72eba4a1f12db:0xc2ad5bdcdc0fd160!8m2!3d29.0032241!4d-80.9138731!16s%2Fg%2F1tj9770";
export const AddressLinkApple = "https://maps.apple.com/place?q=Pomeroy%20Appraisal%20Associates%20of%20Florida&ll=29.003128%2C-80.9138527&auid=14082270078117648077&lsp=9902&address=600%20N%20Ridgewood%20Ave%2C%20Ste%20A%2C%20Edgewater%2C%20FL%20%2032132%2C%20United%20States";

export const GitHub = "https://github.com/derek-perry/paafl.com";

export const Pages = [
  { title: "Home", href: "" },
  { title: "Get an Appraisal", href: "appraisal" },
  { title: "Services", href: "services" },
  { title: "Service Area", href: "service-area" },
  { title: "About", href: "about" },
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