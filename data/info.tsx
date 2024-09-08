import Card from "../components/Card";

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

export const History = <>
  <p>Pomeroy Appraisal Associates of Florida Inc, a Florida based firm specializing in Real Estate appraising and counseling, is fast becoming one of Florida’s most trusted and professional appraisal companies. We offer service to business, industry, banks, governmental bodies, estates and individuals throughout the Southeast.</p>

  <p>Formed in Syracuse, New York in 1930 by Donald T. Pomeroy Sr., the Pomeroy Organization Inc began as a general real estate brokerage firm. Appraising and mortgage banking became primary functions in 1957. In 1964, appraising and counseling became the exclusive functions of Pomeroy Appraisal Associates Inc.</p>

  <p>In 1986 Pomeroy Appraisal Associates of Florida Inc was established by Richard C. Allen Sr. and his twin brother Robert Allen.</p>

  <p>Forty years later, our current President, Ronald S. Crouse, is successfully carrying out the longstanding tradition of excellence and professionalism originated by Don Pomeroy in 1930.</p>

  <p>Pomeroy Appraisal Associates of Florida Inc represents more than 45 years of experience in appraising and counseling. The president is a member of the Appraisal Institute (MAI) or (SRA) and are currently Florida State Certified Appraisers.</p>
</>

export const Summary = <>
  <p>Pomeroy Appraisal Associates of Florida Inc specializes in real estate appraisal and counseling. The firm offers its services to business, industry, banks, governmental bodies, attorneys, as well as individuals throughout the Volusia, Flagler, Brevard, and Seminole counties of Florida. The firm consists of three certified appraisers and a few support staff. Pomeroy Appraisal Associates has over 45 years of real estate appraisal and counseling experience.</p>
</>

export const Experience = <div className="flex flex-col gap-6">
  <Card>
    <h3 className="my-2 text-left">Expert Testimony</h3>
    <p className="text-justify">Pomeroy Appraisal staff has been qualified and presented Circuit Court expert testimony in over 15 counties of the State of Florida. Testimony has also been given in Federal, Supreme Courts, Interstate Commerce Commissions throughout the United States, Florida Federal Bankruptcy Court, and the United States District Court Middle District of Florida Orlando Division.</p>
  </Card>

  <Card>
    <h3 className="my-2 text-left">Commercial</h3>
    <p className="text-justify">Pomeroy Appraisal Associates has experience with all different types of properties: vacant land, improved, special use, and partial interest. Properties appraised includes: Golf courses; nursing homes, gravel pits, salvage yards, manufacturing plants, automobile dealerships, condominium developments, regional shopping centers, railroads, wetlands, commercial, industrial, easements, marinas, billboards, and limited partnerships.</p>
  </Card>

  <Card>
    <h3 className="my-2 text-left">Residential</h3>
    <p className="text-justify">Pomeroy Appraisal Associates provide valuations of all types of residences: Single-Family homes; Multi-Family homes; Condominiums; estate valuations, and FHA assignments. We also provide construction draw inspections.</p>
  </Card>

  <Card>
    <h3 className="my-2 text-left">Current Governmental Contracts Eminent Domain</h3>
    <p className="text-justify">Pomeroy Appraisal Associates currently holds a District-Wide Contract with the Florida Department of Transportation (FDOT) - District 5 and District 7 and submits a bid on specific projects in District 2. We hold County-wide contracts with the following Counties: Volusia, Brevard, Osceola, and Seminole and St. Johns County. Along with Cities: throughout these Counties.</p>
  </Card>
</div>

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