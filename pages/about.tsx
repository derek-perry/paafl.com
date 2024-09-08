import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import Card from "../components/Card";
import { Name, Description, Summary, History, Experience } from "../data/info";

const ContactPage: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"About " + Name} description={Description} url="about" image="" />
      <PageHead />

      <main className="pt-12 lg:pt-20 pb-24 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="about">
          <section id="contentheader">
            <h1 className="text-center px-5 sm:px-9">About {Name}</h1>
          </section>

          <section id="about-card" className="mx-auto max-w-[880px]">
            <Card className="mt-10 mb-20 mx-5 sm:mx-9">
              <p className="font-normal text-3xl max-sm:text-2xl">We serve <Link href={linkBase + "/appraisal-residential" || "./appraisal-residential"} title="Get a Residential Appraisal"><strong>residential</strong></Link> and <Link href={linkBase + "/appraisal-commercial" || "./appraisal-commercial"} title="Get a Commercial Appraisal"><strong>commercial</strong></Link> properties of <em>Volusia, Flagler, Brevard, and Seminole</em> counties in Florida</p>
            </Card>
          </section>

          <section id="about-info" className="px-5 sm:px-9 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <h2 id="summary">Summary</h2>
              <div>{Summary}</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 id="history">History</h2>
              <div>{History}</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 id="experience" className="mb-2">Professional Experience</h2>
              <div>{Experience}</div>
            </div>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default ContactPage;