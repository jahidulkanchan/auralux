import React from "react";
import CtaBg from "../../assets/images/cta-bg.webp";
import CTACard from "./CTACard";

export default function CTASection() {
  return (
    <>
      <section style={{ backgroundImage: `url(${CtaBg})` }} className="bg-cover bg-center bg-no-repeat">
        <div className="container min-h-screen flex px-3 items-center py-10 gap-10 md:gap-16 md:px-5 md:py-16">
          <div className="left-content hidden sm:block xl:w-full"></div>
          <div className="right-content mx-auto">
            <CTACard/>
          </div>
        </div>
      </section>
    </>
  );
}