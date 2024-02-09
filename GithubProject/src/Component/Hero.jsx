import React from "react";

function Hero() {
  return (
    <div className="grid  grid-rows-2 grid-flow-col gap-4 text-NavLightHeadingColor col-span-4 row-span-3 bg-HeroDarkBgColor">
      <div className="row-span-2 col-span-1  bg-slate-500 ...">
        <img src="/assets/image-user-placeholder.png" alt="" />
      </div>
      <div className="col-span-12 row-span-2 bg-slate-500">2</div>
    </div>
  );
}

export default Hero;
