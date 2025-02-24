import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-rows-2 gap-2 md:grid-cols-8 md:grid-rows-none bottom-0 z-[20] items-center justify-items-center mx-auto py-4 px-12 w-full bg-neutral-200 bg-opacity-80">
      <div className="text-blue-400 text-center md:col-span-2 md:col-start-4 tracking-wide">
        <div className="leading-3">
          <p className="font-bold text-3xl">&copy;ExMed, Inc.</p>
          <p className="font-light text-sm leading-[inherit] ">
            all rights reserved
          </p>
        </div>

        <div id="contacts" className="text-xl mt-4 leading-snug">
          <p>connect@exmedinc.com</p>
          <p>800-822-9434</p>
          <p>619-665-3789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
