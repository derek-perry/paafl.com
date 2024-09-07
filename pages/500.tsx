import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageFooter from "../components/PageFooter";
import ButtonInternal from "../components/Buttons/ButtonInternal";

const Error500Page: NextPage = () => {
  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 500: Internal Server Error - Pomeroy Appraisal" description="Pomeroy Appraisal Associates of Florida serves residential and commercial properties of Volusia, Flagler, Brevard, and Seminole counties in Florida" url="500" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="text-red-600">Error 500: Internal Server Error</h1>

        <p>
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <ButtonInternal className="my-4 text-2xl" href="" title="Go to the home/index page of PAAFL.com">Go to Homepage</ButtonInternal>
      </main>

      <PageFooter />
    </div>
  );
};

export default Error500Page;