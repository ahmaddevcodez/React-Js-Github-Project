import React from "react";

function Hero() {
  return (
    <div className="grid  grid-rows-2 grid-flow-col gap-4 text-NavLightHeadingColor col-span-4 row-span-3 bg-HeroDarkBgColor">
      <div className="lg:row-span-2 lg:col-span-1 items-center justify-center m-auto ">
        <img
          className=" profile-image"
          src="/assets/image-user-placeholder.png"
          alt=""
        />
      </div>
      <div className="lg:col-span-12 lg:row-span-2">
        <div className="flex justify-between ">
          <div>
            <h1 className="mb-2 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-4xl  font-bold tracking-normal">
              Your Name
            </h1>
            <a href="Your Id ">
              <h1 className="text-UniversalLinkColor 2xl:text-1xl xl:text-1xl  lg:text-1xl md:text-1xl sm:text-1xl">
                @UserName
              </h1>
            </a>
            <h1 className="mt-7 dark:text-HeroSectionUnavaibleTextColor 2xl:text-1xl xl:text-1xl  lg:text-1xl md:text-1xl sm:text-1xl">
              Your Bio
            </h1>
          </div>

          <div className="text-UniversalParaColor ">
            <h1>When You Join</h1>
          </div>
        </div>
        <div className="bg-HeroSmallSectionDarkBgColor dark:bg-HeroSmallSectionLightBgColor flex justify-between p-6 pr-9 pl-9 rounded-xl mt-10">
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor   dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Repos
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              8
            </h1>
          </div>
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor  dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Followers
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              1486
            </h1>
          </div>
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor  dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Following
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              786
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-96 md:gap-96 sm:gap-96 ">
          {/* Left side */}
          <div className="inline-block mt-10">
            <div className="flex mt-5 items-center">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/location-sign-svgrepo-com.svg"
                alt=""
              />
              <h1 className="section-h1 text-NavLightHeadingColor dark:text-NavDarkHeadingColor font-extralight tracking-normal">
                City Name
              </h1>
            </div>
            <div className="flex mt-5 items-center">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/171454_link_icon.svg"
                alt=""
              />
              <h1 className="section-h1 text-NavLightHeadingColor dark:text-NavDarkHeadingColor font-extralight tracking-normal">
                github.blog
              </h1>
            </div>
          </div>

          {/* Right side */}
          <div className=" mt-5">
            <div className="flex items-center">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/icon-twitter.svg"
                alt=""
              />
              <h1 className="section-h1 text-NavLightHeadingColor dark:text-NavDarkHeadingColor font-extralight tracking-normal">
                City Name
              </h1>
            </div>
            <div className="flex mt-5 items-center">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/icon-company.svg"
                alt=""
              />
              <h1 className="section-h1 text-NavLightHeadingColor dark:text-NavDarkHeadingColor font-extralight tracking-normal">
                @gitHub
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
