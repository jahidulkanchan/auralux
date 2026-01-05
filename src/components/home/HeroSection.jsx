import React from "react";
import LightEffect from "../../assets/videos/run-light-effect.mp4"
import HeroBanner from "../../assets/images/hero-banner.webp";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-dark">
        <video
          className="absolute top-0 left-0 z-[0] h-full w-full object-cover"
          muted
          loop
          autoPlay
          src={LightEffect}
        ></video>
      
        <div className="z-10 container px-3 py-10 mx-auto gap-5 flex min-h-[650px] flex-col-reverse items-center justify-between text-white lg:flex-row">
          <div className="left-content z-10 text-center lg:text-left max-w-3xl space-y-4">
            <h2 className="text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-center mt-5 lg:text-left uppercase font-semibold">Style <br /> Meets Precision</h2>
            <p className="text-light-gray max-w-xl">Whether you're here for a fresh fade or a full makeover, we’ve got you expertly covered by our talented team of expert stylists.</p>
            <Link to="/contact" className="cta-btn uppercase mx-auto lg:mx-0 bg-light-dark w-fit px-5 py-3 md:py-4 rounded text-sm border border-transparent hover:border-light-orange cursor-pointer">Book Appointment</Link>
          </div>
          <div className="right-content relative">
              <div className="gradient-bg from-dark/95 to-dark absolute -bottom-10 left-0 h-[80px] w-full bg-linear-to-b blur"></div>
            <img
              src={HeroBanner}
              className="w-full sm:max-w-2xl lg:max-w-3xl object-cover"
              alt="hero-banner"
            />
          </div>
        </div>
      </section>
    </>
  );
}
