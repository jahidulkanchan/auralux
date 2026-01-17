import React from "react";
import LightEffect from "../../assets/videos/run-light-effect.mp4";
import HeroBanner from "../../assets/images/hero-banner.webp";
import { Link } from "react-router";
import BadgeImage from "../../assets/images/hero-small.webp";

export default function HeroSection() {
  return (
    <>
      <section className="bg-dark relative">
        <video
          className="absolute top-0 left-0 z-[0] h-full w-full object-cover"
          muted
          loop
          autoPlay
          src={LightEffect}
        ></video>

        <div className="z-10 container mx-auto flex min-h-[650px] flex-col-reverse items-center justify-between gap-5 px-3 py-10 text-white lg:flex-row">
          <div className="left-content z-10 max-w-3xl space-y-4 text-center lg:text-left">
            <h2 className="mt-5 text-center text-6xl font-semibold uppercase md:text-7xl lg:text-left lg:text-8xl 2xl:text-9xl">
              Style <br />
              <span className="flex items-center justify-center lg:justify-start gap-4">
                <img
                  src={BadgeImage}
                  className="max-h-[50px] rounded-tr-2xl rounded-bl-2xl border sm:max-h-[60px] md:rounded-tr-4xl md:rounded-bl-4xl lg:max-h-[80px]"
                  alt="hero-badge-image"
                />
                Meets{" "}
              </span>
              Precision
            </h2>

            <p className="text-light-gray mb-8 max-w-xl">
              Whether you're here for a fresh fade or a full makeover, we’ve got
              you expertly covered by our talented team of expert stylists.
            </p>
            <Link
              to="/contact"
              className="cta-btn bg-light-dark hover:border-light-orange mx-auto w-fit cursor-pointer rounded border border-transparent px-5 py-3 text-sm uppercase md:py-4 lg:mx-0"
            >
              Book Appointment
            </Link>
          </div>
          <div className="right-content relative">
            <div className="gradient-bg from-dark/95 to-dark absolute -bottom-10 left-0 h-[80px] w-full bg-linear-to-b blur"></div>
            <img
              src={HeroBanner}
              className="w-full object-cover sm:max-w-2xl lg:max-w-3xl"
              alt="hero-banner"
            />
          </div>
        </div>
      </section>
    </>
  );
}
