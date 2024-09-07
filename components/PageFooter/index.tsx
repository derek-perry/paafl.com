import Image from "next/image";
import LinkInternal from "../Links/LinkInternal";
import LinkExternal from "../Links/LinkExternal";
import { Name, NameJustInc, NameLongInc, Pages } from "../../data/info";

const PageFooter = (): JSX.Element => {
  let currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-[#1D271E] text-[#E8E9DD] w-full">
      <div className="text-lg pt-14 pb-12 px-8 flex flex-col gap-20 text-center items-center justify-center">
        <div className="flex flex-wrap gap-2 sm:gap-8 text-center md:text-justify items-center justify-center">
          <LinkInternal
            className="max-md:basis-full m-auto flex text-center items-center justify-center" href="" title={Name}>
            <Image
              src="/logo-white.svg"
              width={150}
              height={150}
              alt=""
            />
          </LinkInternal>
          <p className="playfair text-white text-3xl sm:text-4xl"><strong>{Name} <br />{NameJustInc}</strong></p>
        </div>
        <div className="flex flex-col gap-y-10 text-center items-center justify-center">
          <div className="flex flex-row flex-wrap gap-x-7 gap-y-5 text-center items-center justify-center">
            {Pages.map((page, index) => (
              <LinkInternal key={index} className="!text-[#E8E9DD] focus:!text-[#86967A] active:!text-[#86967A] hover:!text-white" href={page.href} title={page.title}>{page.title}</LinkInternal>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 text-center items-center justify-center">
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 text-center items-center justify-center text-sm">
              <p className="text-sm">Copyright © {currentYear}</p>
              <LinkInternal className="text-sm !text-[#E8E9DD] focus:!text-[#86967A] active:!text-[#86967A] hover:!text-white no-underline" href="" title={NameLongInc}>{NameLongInc}</LinkInternal>
            </div>
            <LinkInternal className="text-sm !text-[#E8E9DD] focus:!text-[#86967A] active:!text-[#86967A] hover:!text-white" href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>
            <p className="text-sm">Website by <LinkExternal className="!text-[#E8E9DD] focus:!text-[#86967A] active:!text-[#86967A] hover:!text-white" href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;