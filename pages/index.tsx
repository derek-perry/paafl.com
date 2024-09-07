import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageFooter from "../components/PageFooter";
import ButtonInternal from "../components/Buttons/ButtonInternal";
import LinkInternal from "../components/Links/LinkInternal";
import LinkExternal from "../components/Links/LinkExternal";
import Image from "next/image";
import Card from "../components/Card";
import { Name, NameJustInc, Description, EmailMain, Domain } from "../data/info";

const HomePage: NextPage = () => {
  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={Name} description={Description} url="" image="" />

      <main className="py-20 px-9 max-w-[880px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <div className="flex flex-wrap gap-2 sm:gap-8 align-top text-center md:text-justify items-center justify-center">
          <LinkInternal
            className="max-md:basis-full m-auto flex text-center items-center justify-center" href="" title={Name}>
            <Image
              src="/logo.svg"
              width={150}
              height={150}
              alt=""
            />
          </LinkInternal>
          <h1 className="playfair text-green-900 text-3xl sm:text-4xl"><strong>{Name} <br />{NameJustInc}</strong></h1>
        </div>

        <section id="info">
          <Card className="my-20">
            <p className="font-normal text-3xl max-sm:text-2xl">We serve <LinkInternal href="appraisal-residential" title="Get a Residential Appraisal"><strong>residential</strong></LinkInternal> and <LinkInternal href="appraisal-commercial" title="Get a Commercial Appraisal"><strong>commercial</strong></LinkInternal> properties of <em>Volusia, Flagler, Brevard, and Seminole</em> counties in Florida</p>
          </Card>

          <ButtonInternal className="text-2xl" href="appraisal" title="Get an Appraisal">Get an Appraisal</ButtonInternal>
          <p className="mt-3 text-xl"><em>or, send an email to <LinkExternal className="max-sm:break-all" href={"mailto:" + EmailMain + "?subject=Inquiry - " + Domain + "&body=Inquire about an appraisal with " + Name + ". Please include necessary contact information along with any notes about availability."} title={"Contact " + Name + " via Email at " + EmailMain}>{EmailMain}</LinkExternal></em></p>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default HomePage;