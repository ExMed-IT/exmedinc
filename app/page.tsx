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
    <div className="home px-8 py-24 ">
      <div className="title text-6xl text-white-500 sm:text-8xl lg:text-[10rem] ">
        <h1 className="gold-glow font-bree" id="main-title">
          ExMed, Inc.
        </h1>{" "}
      </div>
      <div className="mt-32 text-white-500 text-4xl font-thin sm:text-5xl lg:text-7xl capitalize">
        <p>Where</p>
        <p className="text-white-500 font-extrabold gold-glow">Excellence</p>
        <p>is Our business</p>
      </div>
      {/* <div className="col s12 l4 right intro">
            <Link to="/about">Where Excellence is Our business!</Link>
          </div> */}
    </div>
  );
}
