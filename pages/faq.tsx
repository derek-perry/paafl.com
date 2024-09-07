import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageFooter from "../components/PageFooter";
import LinkExternal from "../components/Links/LinkExternal";
import {
  Accordion
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ItemAccordion from "../components/ItemAccordion";
import { FAQ } from "../data/faq";
import { NameLongInc, Description, Domain, EmailMain, ContactCTA } from "../data/info";

const FAQPage: NextPage = () => {
  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"FAQ - " + Domain} description={Description} url="faq" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="faqpage">
          <section id="contentheader">
            <h1>Frequently Asked Questions</h1>
          </section>

          <section id="faq">
            <div className="mt-8 mb-24 max-w-[1000px] text-left">
              <Accordion>
                {FAQ.map((item, index) => (
                  <ItemAccordion key={index} index={index} question={item.question ? item.question : ""} answer={item.answer ? item.answer : ""} />
                ))}
              </Accordion>
            </div>
          </section>

          <section id="contact" className="max-w-[1000px] text-left mb-8">
            <h2 id="contact-info">Got More Questions?</h2>
            <p className="mt-2">{ContactCTA} <hr className="my-4"/>Contact {NameLongInc} via email at <LinkExternal href={"mailto:" + EmailMain} title={"Contact " + NameLongInc + " via Email at " + EmailMain}>{EmailMain}</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default FAQPage;