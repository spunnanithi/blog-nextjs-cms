import { ChevronsDown, Send } from "lucide-react";
import React from "react";
import Link from "next/link";
// import { Button } from "@components/ui/button";

const HeroBanner = () => {
  const heroBackgroundImageUrl =
    "url(https://images.pexels.com/photos/163943/pexels-photo-163943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
  const heroBackgroundImageHeight = "900px";

  return (
    <div
      className={`relative w-full overflow-hidden bg-cover bg-no-repeat`}
      style={{
        backgroundPosition: "50%",
        backgroundImage: heroBackgroundImageUrl,
        height: heroBackgroundImageHeight,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center md:px-12">
            <div className="mb-16 mt-2 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-myDarkGreen via-myImperialBlue to-myDarkBlue bg-clip-text text-transparent">
                MyDevJourney
              </span>
            </div>
            {/* <Button
              variant="outline"
              className="mb-20 border-2 border-myLightGreyBlue bg-transparent px-6 py-6 text-sm font-medium uppercase text-myLightGreyBlue transition duration-150 ease-in-out hover:bg-myLightGreyBlue dark:border-myGreyBlue dark:text-myGreyBlue hover:dark:border-myDarkBlue hover:dark:bg-myDarkBlue"
            >
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </Button> */}
            <div className="mb-20 bg-gradient-to-r from-myDarkBlue via-myImperialBlue to-myDarkGreen bg-clip-text text-header font-subtitle text-transparent">
              Adventures Await
            </div>
            <div className="flex justify-center">
              <Link href="#main">
                <ChevronsDown
                  size={64}
                  className="animate-bounce text-myLightGreyBlue duration-2000 dark:text-myGreyBlue"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
