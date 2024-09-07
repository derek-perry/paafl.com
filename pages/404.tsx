import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageFooter from "../components/PageFooter";
import ButtonInternal from "../components/Buttons/ButtonInternal";

const Error404Page: NextPage = () => {
  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 404: Content Not Found - Pomeroy Appraisal" description="Pomeroy Appraisal Associates of Florida serves residential and commercial properties of Volusia, Flagler, Brevard, and Seminole counties in Florida" url="404" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="text-red-600">Error 404: Content Not Found</h1>

        <p>
          The page/content you are looking for has moved, is no longer available, has been archived, or was not valid.
        </p>

        <ButtonInternal className="my-4 text-2xl" href="" title="Go to the home/index page of PAAFL.com">Go to Homepage</ButtonInternal>
      </main>

      <PageFooter />
    </div>
  );
};

export default Error404Page;