import type { NextPage } from "next";
import SiteHead from "../components/SiteHead";
import PageHead from "../components/PageHead";
import PageFooter from "../components/PageFooter";
import Link from "next/link";
import { Name, Description, Domain } from "../data/info";

const Error500Page: NextPage = () => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || ""
  
  return (
    <div className="text-[#1D271E] min-h-screen flex flex-col items-center justify-center">
      <SiteHead title={"Error 500: Internal Server Error - " + Name} description={Description} url="500" image="" />
      <PageHead />

      <main className="py-32 px-9 max-w-[1000px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="text-red-600">Error 500: Internal Server Error</h1>

        <p>
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <Link className="button my-4 text-2xl" href={linkBase + "/" || "./"} title={"Go to the home/index page of " + Domain}>Go to Homepage</Link>
      </main>

      <PageFooter />
    </div>
  );
};

export default Error500Page;