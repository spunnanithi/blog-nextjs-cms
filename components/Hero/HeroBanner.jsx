import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "50%",
        backgroundImage:
          // "url(https://mdbcdn.b-cdn.net/img/new/slides/146.webp)",
          "url(https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height: "700px",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mb-16 mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              The best offer on the market <br />
              <span>for your business</span>
            </h1>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-[46px] pb-[12px] pt-[14px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
