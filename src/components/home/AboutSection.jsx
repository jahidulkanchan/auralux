import React from "react";
import AboutUs from "../../assets/images/about-us.webp";
import ChooseUs from "../../assets/images/choose-us.webp";

export default function AboutSection() {
  return (
    <>
      <section>
        <div className="container flex items-center justify-between gap-12 px-3 py-10 md:gap-8 md:px-5 md:py-16">
          <div className="left-content max-w-[650px]">
            <div className="section-badge mx-0">About HairCraft</div>
            <h2 className="section-title text-left mx-0 max-w-lg">
              Your Trusted Salon & Barber shop.
            </h2>
            <br />
            <img src={AboutUs} alt="About Us" />
            <br />
          </div>
          <div className="right-content  bg-white-bg max-w-[650px] min-h-[200px] w-full">
            <img src={ChooseUs} alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
}
