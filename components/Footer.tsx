import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-rows-2 gap-2 md:grid-cols-8 md:grid-rows-none bottom-0 z-[20] items-center justify-items-center bg-primary mx-auto py-4 px-12 w-full">
      <div className="text-white-500 text-center md:col-span-2 md:col-start-4 tracking-wide">
        <div className="leading-3">
          <p className="font-bold text-lg">&copy; 2021 ExMed, Inc.</p>
          <p className="font-light text-sm leading-[inherit] ">
            all rights reserved
          </p>
        </div>

        <div id="contacts" className="text-gold-400 mt-4 leading-snug">
          <p>connect@exmedinc.com</p>
          <p>800-822-9434</p>
          <p>619-665-3789</p>
        </div>
        <div className="light"></div>
      </div>
    </footer>
  );
};

export default Footer;
