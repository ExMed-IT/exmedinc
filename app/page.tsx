"use client"; // This is a client component 👈🏽
import { useEffect } from "react";
import "./css/home.scss";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("body--home");
    return () => {
      document.body.classList.remove("body--home");
    };
  }, []);

  return (
    <div className="mt-32 mx-auto max-w-md overflow-hidden rounded-xl bg-neutral-200 bg-opacity-90 shadow-md md:max-w-2xl h-1/2 content-center grid grid-cols-1 gap-2">
      <div className="content-center">
        <div className="p-8">
          <div className="text-6xl md:text-8xl font-bold tracking-wide text-sky-600 text-center">
            ExMed, Inc.
          </div>

          <p className="pt-16 text-neutral-900 text-lg leading-tight">
            Exciting changes are on the way! Our website is currently undergoing
            a complete redesign to serve you better. <br />
            <br />
            We’ll be back up and running in early 2025 with a fresh new look and
            improved experience. In the meantime, feel free to reach out to us
            at our contact info below for updates. <br />
            <br />
            Thank you for your patience—we can’t wait to show you what’s coming
            next!
          </p>
        </div>
        <div
          id="contacts"
          className="text-2xl pt-4 leading-snug font-bold text-center"
        >
          <p>connect@exmedinc.com</p>
          <p>800-822-9434</p>
        </div>
      </div>
    </div>
  );
}
