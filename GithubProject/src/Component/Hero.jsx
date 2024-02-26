import React from "react";
import UserContextProvider from "../context/userContextProvider";

function Hero() {
  const { user } = UserContextProvider();
  const {
    name,
    id,
    bio,
    followers,
    following,
    repos,
    location,
    blog,
    twitter,
    company,
  } = user || {};

  return (
    <div className="grid p-10 pr-10 pl-10 lg:grid-cols-4 grid-cols-1 gap-6 rounded-xl text-NavLightHeadingColor bg-HeroDarkBgColor">
      <div className="lg:col-span-1 main-img-div items-center  justify-center mt-4">
        <img
          className="profile-image bg-white p-2 rounded-full"
          src="/assets/475909.png"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="lg:col-span-3 grid-cols-1">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-4xl  font-bold tracking-normal">
              Your Name
            </h1>
            <a href="Your Id">
              <h1 className="text-UniversalLinkColor">@UserName</h1>
            </a>
            <h1 className="mt-7 dark:text-HeroSectionUnavaibleTextColor">
              Your Bio
            </h1>
          </div>

          <div className="text-UniversalParaColor mt-1 joining">
            <h1>When You Join</h1>
          </div>
        </div>

        <div className="bg-HeroSmallSectionDarkBgColor dark:bg-HeroSmallSectionLightBgColor flex justify-between p-6 rounded-xl mt-10">
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor   dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Repos
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              8
            </h1>
          </div>
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor   dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Followers
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              1486
            </h1>
          </div>
          <div>
            <h1 className="section-h1 text-NavLightHeadingColor   dark:text-NavDarkHeadingColor font-extralight tracking-normal">
              Following
            </h1>
            <h1 className="section-h1 text-NavLightHeadingColor main-heading dark:text-NavDarkHeadingColor 2xl:text-5xl xl:text-4xl  lg:text-4xl md:text-4xl sm:text-1xl  font-bold tracking-normal">
              786
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mt-10">
          {/* Left side */}
          <div>
            <div className="flex items-center ">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/location-sign-svgrepo-com.svg"
                alt=""
              />
              <h1 className="section-h1">City Name</h1>
            </div>
            <div className="flex mt-5 mb-10 items-center">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/171454_link_icon.svg"
                alt=""
              />
              <h1 className="section-h1 ">github.blog</h1>
            </div>
          </div>

          {/* Right side */}
          <div>
            <div className=" mt-up flex items-center lg:justify-end">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/icon-twitter.svg"
                alt=""
              />
              <h1 className="section-h1">City Name</h1>
            </div>
            <div className="flex mt-5 mt-up  items-center lg:justify-end mr-4">
              <img
                className="h-7 fill-white mr-2"
                src="/assets/icon-company.svg"
                alt=""
              />
              <h1 className="section-h1">@gitHub</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
